// Account deletion request on the web (Google Play requires a web option in
// addition to the in-app one). The user signs in with the same email and
// password as the app; the request then runs the same database function the
// app uses (request_account_deletion), which cancels listings and refunds
// bidders, refunds the user's own bids and funds, and queues payouts. The
// backend deletes the account once nothing is left in flight.
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL } from '../components/LegalPage';
import { supabase } from '../lib/supabase';

type Status = { status: string; requested_at: string } | null;

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState<string | null>(null);
  const [request, setRequest] = useState<Status>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null);

  const loadStatus = async () => {
    const { data } = await supabase.from('account_deletion_requests').select('status, requested_at').maybeSingle();
    setRequest((data as Status) || null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) { setSignedIn(data.session.user.email || 'your account'); loadStatus(); }
    });
  }, []);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setMsg(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error || !data.user) { setMsg({ kind: 'error', text: error?.message || 'Sign-in failed' }); return; }
    setPassword('');
    setSignedIn(data.user.email || 'your account');
    loadStatus();
  };

  const requestDeletion = async () => {
    if (!window.confirm('Delete your Book of Memes account? This cannot be undone once it completes.')) return;
    setBusy(true); setMsg(null);
    const { data, error } = await supabase.rpc('request_account_deletion');
    setBusy(false);
    if (error) { setMsg({ kind: 'error', text: error.message }); return; }
    setMsg({ kind: 'ok', text: (data as { message?: string })?.message || 'Deletion requested.' });
    loadStatus();
  };

  const cancelDeletion = async () => {
    setBusy(true); setMsg(null);
    const { error } = await supabase.rpc('cancel_account_deletion');
    setBusy(false);
    if (error) { setMsg({ kind: 'error', text: error.message }); return; }
    setMsg({ kind: 'ok', text: 'Deletion cancelled. Your account stays open.' });
    loadStatus();
  };

  const signOut = async () => { await supabase.auth.signOut(); setSignedIn(null); setRequest(null); setMsg(null); };

  return (
    <LegalPage title="Delete your Book of Memes account" description="Request deletion of your Book of Memes account and the data linked to it.">
      <p>
        You can delete your account here, or in the app: <strong>Profile → Account &amp; Privacy → Delete my account</strong>.
        Both do the same thing.
      </p>

      <h2>What happens</h2>
      <ol>
        <li>Your open marketplace listings are cancelled and everyone who bid on them is refunded. Your own open bids are refunded to you.</li>
        <li>Your unused marketplace funds are refunded to the card or crypto wallet they came from.</li>
        <li>Your cleared earnings are paid to your payout account. Earnings still clearing (30 days after a sale) are paid when they clear.</li>
        <li>When nothing is left to refund or pay, your account is deleted. This usually takes a few days, and at most 120 days if you have earnings still clearing.</li>
      </ol>

      <h2>What is deleted, kept and lost</h2>
      <ul>
        <li><strong>Deleted:</strong> your login, profile, photo, bio, posts you haven&apos;t sold, messages, invited contacts, payout details and your credit balance.</li>
        <li><strong>Kept, without your name:</strong> payment, marketplace and payout records, for as long as tax and anti-fraud laws require (usually up to 6 years). Items you sold stay with their buyers, credited to &quot;deleted user&quot;.</li>
        <li><strong>Lost:</strong> unused credits, and earnings that can&apos;t be paid because you have no payout account or they are still unpaid 120 days after your request.</li>
      </ul>
      <p>
        Full details are in our <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms</Link>.
      </p>

      <h2>Request deletion</h2>
      <div className="legal-box">
        {!signedIn ? (
          <form className="legal-form" onSubmit={signIn}>
            <p>Sign in with the email and password you use in the app.</p>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="legal-btn secondary" type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
          </form>
        ) : request?.status === 'pending' ? (
          <>
            <p>Signed in as <strong>{signedIn}</strong>.</p>
            <p>
              Deletion was requested on {new Date(request.requested_at).toLocaleDateString()}. We are finishing refunds and payouts;
              your account is deleted automatically when they&apos;re done.
            </p>
            <button className="legal-btn secondary" onClick={cancelDeletion} disabled={busy}>Keep my account</button>{' '}
            <button className="legal-btn secondary" onClick={signOut} disabled={busy}>Sign out</button>
          </>
        ) : (
          <>
            <p>Signed in as <strong>{signedIn}</strong>.</p>
            <button className="legal-btn" onClick={requestDeletion} disabled={busy}>{busy ? 'Working…' : 'Delete my account'}</button>{' '}
            <button className="legal-btn secondary" onClick={signOut} disabled={busy}>Sign out</button>
          </>
        )}
        {msg && <p className={`legal-msg ${msg.kind}`}>{msg.text}</p>}
      </div>

      <p>
        Can&apos;t sign in? Email <a href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20account`}>{CONTACT_EMAIL}</a> from the
        address on your account with the subject &quot;Delete my account&quot;. We&apos;ll confirm it&apos;s you, then process it the same way.
      </p>
    </LegalPage>
  );
}
