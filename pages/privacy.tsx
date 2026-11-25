import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL, OPERATOR } from '../components/LegalPage';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" description="What Book of Memes collects, why, who it is shared with, and how to delete it.">
      <p>
        This policy explains what personal data {OPERATOR} (&quot;we&quot;) collects when you use the Book of Memes app and website,
        why, who we share it with, how long we keep it, and your choices. Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>1. What we collect</h2>
      <table className="legal-table">
        <thead><tr><th>Data</th><th>What it is</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Account</td><td>Name, username, email, phone number, password (stored hashed by our login provider), profile photo, bio</td><td>To create and run your account and show your profile</td></tr>
          <tr><td>Your content</td><td>Stories, memes, puzzles, kids collections, music, podcasts, videos, comments, likes, bookmarks</td><td>To publish what you post and run the feeds</td></tr>
          <tr><td>Messages and calls</td><td>Chat messages, photos, videos and voice notes you send; call records (who, when, how long)</td><td>To deliver messages and connect calls. We don&apos;t record calls.</td></tr>
          <tr><td>Contacts (only if you allow it)</td><td>Phone numbers and emails from your phone&apos;s contacts</td><td>To show which of your contacts already use Book of Memes, and to record invites you choose to send. Numbers are checked one at a time against our users; we store only the contacts you invite.</td></tr>
          <tr><td>Camera, microphone, photos (only when you use them)</td><td>Pictures, video and audio you choose to capture or upload</td><td>Profile photos, posts, voice notes and calls</td></tr>
          <tr><td>Purchases</td><td>Google Play order details for credits (we never see your card)</td><td>To add credits and handle refunds</td></tr>
          <tr><td>Marketplace payments</td><td>Paystack payment reference, amount, card brand and last 4 digits (never the full card); USDT sending address, network and transaction hash</td><td>To confirm payments, hold bids, refund unsuccessful bids to their source, and prevent fraud</td></tr>
          <tr><td>Payout details</td><td>Bank name, account number and the account name your bank returns; or your USDT address</td><td>To pay your earnings, and to check payouts go only to accounts in your own name</td></tr>
          <tr><td>Marketplace and wallet activity</td><td>Listings, bids, sales, royalties, earnings, withdrawals, credit transactions</td><td>To run the marketplace, keep accurate records and meet legal duties</td></tr>
          <tr><td>AI features</td><td>Prompts and images you send to Bascardo AI and the content it generates</td><td>To generate the result you asked for</td></tr>
          <tr><td>Ads and promotions</td><td>Promotions you buy; when someone views or taps a promotion (counted once per person per day)</td><td>To run promotions and show their results to the advertiser in totals only</td></tr>
          <tr><td>Device and usage</td><td>App version, device type, operating system, crash information, install referral code</td><td>To keep the app working, fix bugs, and credit referrals</td></tr>
        </tbody>
      </table>
      <p>We don&apos;t sell your personal data.</p>

      <h2>2. Who we share it with</h2>
      <p>We share data only with the services that run Book of Memes, and only what each one needs:</p>
      <ul>
        <li><strong>Supabase</strong>: database, login and file storage.</li>
        <li><strong>Cloudinary</strong>: storing and delivering images, audio and video.</li>
        <li><strong>Render</strong> and <strong>Vercel</strong>: hosting our server and website.</li>
        <li><strong>Google Play</strong>: in-app purchases and app delivery.</li>
        <li><strong>Paystack</strong>: card and bank payments, refunds, bank account checks and payouts.</li>
        <li><strong>TRON and BNB Smart Chain networks</strong>: USDT payments. Blockchain transactions are public by design and can&apos;t be deleted by anyone.</li>
        <li><strong>Agora</strong>: voice and video calls.</li>
        <li><strong>Runware</strong> and <strong>Anthropic</strong>: generating AI images, video, voice and chat replies from your prompts.</li>
        <li><strong>Google AdMob</strong>: if ads from Google are shown in the app, Google may use your device&apos;s advertising ID. You can reset or turn off ad personalisation in your phone&apos;s settings.</li>
        <li><strong>Microlink</strong>: building previews of links you share in chat (it receives the link, not who sent it).</li>
      </ul>
      <p>
        Other users see what you make public: your profile, posts, listings and, on items you sell, your username in the ownership history.
        We may also share data when the law requires it, to protect users from fraud or harm, or if the business is transferred.
      </p>

      <h2>3. How long we keep it</h2>
      <ul>
        <li>Account, content and messages: until you delete them or your account.</li>
        <li>Payment, marketplace and payout records: kept after account deletion, without your name, for as long as tax, accounting and anti-fraud laws require (usually up to 6 years).</li>
        <li>Content you sold stays with the buyer after you leave, credited to &quot;deleted user&quot;.</li>
        <li>Backups are overwritten on a rolling basis.</li>
      </ul>

      <h2>4. Deleting your account and data</h2>
      <p>
        You can delete your account in the app (Profile → Account &amp; Privacy → Delete my account) or on our{' '}
        <Link href="/delete-account">delete account page</Link>. We first finish anything that involves other people&apos;s money
        (refunds, bids, payouts), then delete your account, profile, posts that haven&apos;t been sold, messages, contacts you invited and
        payout details. What we keep is listed in section 3.
      </p>
      <p>
        To delete only some of your data (posts, comments, messages, AI creations or profile details) and keep your account, follow the
        steps on our <Link href="/delete-data">delete data page</Link>.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Depending on where you live (for example under Nigeria&apos;s Data Protection Act or the GDPR), you can ask for a copy of your data,
        correct it, delete it, object to or restrict how we use it, and complain to your data protection authority. Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>; we reply within 30 days.
      </p>

      <h2>6. Children</h2>
      <p>
        Book of Memes is for adults aged 18 and over. The kids collections are made for parents to use with their children; children
        and teenagers under 18 shouldn&apos;t create accounts. If you believe someone under 18 has given us personal data, email us and we
        will delete it.
      </p>

      <h2>7. Security</h2>
      <p>
        Data is sent over encrypted connections, access to our database is restricted by user, and payments are handled by Paystack and
        Google Play so we never store full card details. No system is perfectly secure; if a breach affects you, we will tell you as the
        law requires.
      </p>

      <h2>8. Changes</h2>
      <p>We&apos;ll post changes here and tell you in the app if they matter.</p>
    </LegalPage>
  );
}
