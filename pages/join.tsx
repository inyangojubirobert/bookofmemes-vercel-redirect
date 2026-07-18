// pages/join.tsx
// Referral landing page -- Rewards.js in the mobile app generates links like
// https://bookofmemes.cc/join?ref=CODE. This page tries to hand off directly
// into the app (Android: explicit intent, works even without assetlinks.json
// verification; iOS: custom-scheme attempt + App Store fallback), and falls
// back to the Play/App Store if the app isn't installed.
import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';

const ANDROID_PACKAGE = 'com.inyangojubirobert7.bookofmemes';
// TODO: replace once published on the App Store.
const APP_STORE_URL = 'https://apps.apple.com/app/idYOUR_APP_STORE_ID';

// Google Play stores whatever's on `referrer` through the install and makes
// it available to the app afterward via the Play Install Referrer API --
// this is what lets a fresh install (not just an already-installed app)
// eventually recover the ref code. The app-side piece that actually reads it
// back out isn't built yet (needs react-native-play-install-referrer + a
// native rebuild) -- this just makes sure the value survives the trip
// through the Play Store so that piece has something to read later.
function buildPlayStoreUrl(ref: string) {
  const base = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
  return ref ? `${base}&referrer=${encodeURIComponent('ref=' + ref)}` : base;
}

interface JoinPageProps {
  ref: string;
}

export default function JoinPage({ ref }: JoinPageProps) {
  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);

    if (isAndroid) {
      // Explicit intent targets the package directly -- works even while
      // assetlinks.json verification is still propagating/unverified, since
      // an explicit intent doesn't depend on Digital Asset Links at all.
      const intentUrl = `intent://join?ref=${encodeURIComponent(ref)}#Intent;scheme=bookofmemes;package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(buildPlayStoreUrl(ref))};end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // No iOS equivalent of an explicit intent -- Universal Links are the
      // reliable path there, and apple-app-site-association isn't
      // configured for /join yet (separate fix). Attempt the custom scheme,
      // fall back to the App Store if it doesn't hand off.
      window.location.href = `bookofmemes://join?ref=${encodeURIComponent(ref)}`;
      const timer = setTimeout(() => {
        if (!document.hidden) window.location.href = APP_STORE_URL;
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [ref]);

  const isIOSNow = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent);
  const storeUrl = isIOSNow ? APP_STORE_URL : buildPlayStoreUrl(ref);

  return (
    <div
      style={{
        fontFamily: '-apple-system, system-ui, sans-serif',
        background: '#0D1525',
        color: '#E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0,
        textAlign: 'center',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 360 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dljcj00ht/image/upload/v1756325607/BAscardoCoin_Logo_bvq8tx.png"
          alt="Book of Memes"
          width={72}
          height={72}
          style={{ borderRadius: 36, marginBottom: 16 }}
        />
        <h1 style={{ fontSize: 20, margin: '0 0 8px' }}>Opening Book of Memes&hellip;</h1>
        <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.5 }}>
          If the app doesn&apos;t open automatically, tap below.
        </p>
        <a
          href={storeUrl}
          style={{
            display: 'inline-block',
            marginTop: 20,
            background: '#F59E0B',
            color: '#0D1525',
            fontWeight: 700,
            padding: '14px 28px',
            borderRadius: 12,
            textDecoration: 'none',
          }}
        >
          Open / Get the App
        </a>
      </div>
    </div>
  );
}

// Read `ref` server-side too, not just via useEffect -- useEffect only runs
// after client-side hydration, so this makes the redirect attempt as fast as
// possible instead of waiting on JS to finish loading first.
export const getServerSideProps: GetServerSideProps<JoinPageProps> = async ({ query }) => {
  const ref = typeof query.ref === 'string' ? query.ref : '';
  return { props: { ref } };
};
