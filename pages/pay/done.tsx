// Paystack sends buyers here after a marketplace payment
// (callback_url in Backend/routes/marketRoutes.js). The app confirms the
// payment itself when the buyer returns, so this page only sends them back.
import { useEffect } from 'react';
import Head from 'next/head';

export default function PaymentDone() {
  useEffect(() => {
    // Try to reopen the app; if it doesn't open, the page below stays.
    const t = setTimeout(() => { window.location.href = 'bookofmemes://payment-complete'; }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Head>
        <title>Payment received · Book of Memes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ fontFamily: '-apple-system, system-ui, sans-serif', background: '#0D1525', color: '#E2E8F0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center' }}>
        <div style={{ maxWidth: 360 }}>
          <h1 style={{ fontSize: 24, marginBottom: 12 }}>Payment complete</h1>
          <p style={{ color: '#9AA5C7', lineHeight: 1.6 }}>
            Go back to the Book of Memes app. It confirms your payment and finishes your bid or purchase automatically.
          </p>
          <a href="bookofmemes://payment-complete" style={{ display: 'inline-block', marginTop: 20, padding: '12px 20px', background: '#FFD65A', color: '#151d3d', borderRadius: 12, fontWeight: 800, textDecoration: 'none' }}>
            Open Book of Memes
          </a>
        </div>
      </div>
    </>
  );
}
