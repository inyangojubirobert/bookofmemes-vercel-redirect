// Shared layout for the legal pages (/privacy, /terms, /marketplace-rules, /delete-account).
// Google Play links to these from the store listing and the Data safety form,
// and the app's Account & Privacy screen opens /privacy and /terms.
import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';

// Shown on every legal page. Change here if the address or entity changes.
export const CONTACT_EMAIL = 'support@bookofmemes.cc';
export const OPERATOR = 'Book of Memes';
export const LAST_UPDATED = '17 November 2026';

export default function LegalPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{`${title} · Book of Memes`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="legal-wrap">
        <header className="legal-header">
          <Link href="/" className="legal-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://res.cloudinary.com/dljcj00ht/image/upload/v1756325607/BAscardoCoin_Logo_bvq8tx.png" alt="" width={36} height={36} />
            <span>Book of Memes</span>
          </Link>
          <nav className="legal-nav">
            <Link href="/terms">Terms</Link>
            <Link href="/marketplace-rules">Marketplace rules</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/delete-account">Delete account</Link>
          </nav>
        </header>
        <main className="legal-main">
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
          {children}
        </main>
        <footer className="legal-footer">
          <p>Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <p>© {new Date().getFullYear()} {OPERATOR}</p>
        </footer>
      </div>
      <style jsx global>{`
        :root { --bg: #0d1525; --panel: #151d3d; --text: #e2e8f0; --muted: #9aa5c7; --accent: #ffd65a; --link: #87ceeb; --line: #26305a; }
        @media (prefers-color-scheme: light) {
          :root { --bg: #f7f8fc; --panel: #ffffff; --text: #151d3d; --muted: #4b5578; --accent: #9a6b00; --link: #1f5fbf; --line: #dfe3f0; }
        }
        html, body { background: var(--bg); color: var(--text); }
        .legal-wrap { max-width: 820px; margin: 0 auto; padding: 0 16px 48px; font-family: -apple-system, system-ui, 'Segoe UI', Roboto, sans-serif; line-height: 1.65; }
        .legal-header { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; padding: 20px 0; border-bottom: 1px solid var(--line); }
        .legal-brand { display: flex; align-items: center; gap: 10px; color: var(--text); text-decoration: none; font-weight: 800; font-size: 18px; }
        .legal-brand img { border-radius: 18px; }
        .legal-nav { display: flex; gap: 16px; flex-wrap: wrap; }
        .legal-nav a { color: var(--link); text-decoration: none; font-size: 15px; }
        .legal-main h1 { font-size: 30px; margin: 28px 0 4px; }
        .legal-main h2 { font-size: 20px; margin: 32px 0 8px; }
        .legal-main h3 { font-size: 16px; margin: 20px 0 6px; }
        .legal-main p, .legal-main li { font-size: 16px; color: var(--text); }
        .legal-main p { margin: 10px 0; }
        .legal-main ul, .legal-main ol { margin: 8px 0 8px 22px; }
        .legal-main li { margin: 6px 0; }
        .legal-main a { color: var(--link); }
        .legal-updated { color: var(--muted); font-size: 14px !important; }
        .legal-box { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; padding: 16px; margin: 16px 0; }
        .legal-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 15px; display: block; overflow-x: auto; }
        .legal-table th, .legal-table td { text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--line); vertical-align: top; }
        .legal-table th { color: var(--muted); font-weight: 700; }
        .legal-footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--line); color: var(--muted); font-size: 14px; }
        .legal-footer a { color: var(--link); }
        .legal-form label { display: block; font-size: 14px; color: var(--muted); margin: 12px 0 4px; }
        .legal-form input { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--line); background: var(--bg); color: var(--text); font-size: 16px; }
        .legal-btn { margin-top: 16px; padding: 13px 18px; border: 0; border-radius: 12px; background: #e5484d; color: #fff; font-weight: 800; font-size: 16px; cursor: pointer; }
        .legal-btn.secondary { background: transparent; border: 1px solid var(--line); color: var(--text); }
        .legal-btn:disabled { opacity: 0.6; cursor: default; }
        .legal-msg { margin-top: 12px; font-size: 15px; }
        .legal-msg.error { color: #ff6b6b; }
        .legal-msg.ok { color: #34d399; }
      `}</style>
    </>
  );
}
