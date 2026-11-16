import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL, OPERATOR } from '../components/LegalPage';

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" description="The rules for using Book of Memes, its credits, marketplace, promotions and payouts.">
      <p>
        These terms are an agreement between you and {OPERATOR} (&quot;we&quot;, &quot;us&quot;) for using the Book of Memes app and
        website (the &quot;Service&quot;). By creating an account or using the Service you agree to them. If you don&apos;t agree, don&apos;t use the Service.
      </p>

      <h2>1. Your account</h2>
      <ul>
        <li>You must be at least 13 years old to create an account. If you are under 18, you need a parent or guardian&apos;s permission, and you can&apos;t buy credits, bid, sell or withdraw money without them.</li>
        <li>Give accurate information and keep your login secure. You are responsible for what happens on your account.</li>
        <li>One person, one account. Using several accounts to bid on your own listings, inflate prices, or move money between your accounts is not allowed.</li>
      </ul>

      <h2>2. Your content</h2>
      <ul>
        <li>You keep ownership of the content you post, subject to the marketplace rules in section 5 once you sell it.</li>
        <li>You give us a worldwide, non-exclusive, royalty-free licence to host, display and distribute your content inside the Service, and to show it in promotions of the Service.</li>
        <li>Only post content you have the right to post. No content that is illegal, infringes someone else&apos;s rights, sexualises minors, harasses people, or promotes violence or hate. We can remove content and suspend accounts that break these rules.</li>
      </ul>

      <h2>3. Credits</h2>
      <ul>
        <li>Credits are bought in the app through Google Play and are shown in US dollars (1 credit = US$1).</li>
        <li>Credits pay for things we sell: marketplace listing fees and featured upgrades, post boosts and ads, premium, and AI features.</li>
        <li><strong>Credits have no cash value.</strong> They can&apos;t be withdrawn, exchanged for money, transferred to another user, or used to buy other users&apos; items on the marketplace.</li>
        <li>Purchases are refunded only as required by law or by Google Play&apos;s refund policy. If a Google Play purchase is refunded or charged back, the credits are removed, which can make your credit balance negative until it is paid back.</li>
        <li>Unused credits are lost when your account is deleted.</li>
      </ul>

      <h2>4. The marketplace</h2>
      <p>The marketplace lets you sell content you own to other users and buy theirs. Ownership of the item moves to the buyer; we are not the seller.</p>

      <h3>4.1 Listing</h3>
      <ul>
        <li>You can only list content you currently own. Listing costs a non-refundable fee paid in credits.</li>
        <li>Every listing has an end date: auctions run up to 14 days, fixed-price listings up to 30 days.</li>
        <li>While an item is listed, and after it has been sold, its content can&apos;t be edited or deleted, because other people have paid for it.</li>
        <li>A listing that has paid bids can&apos;t be cancelled.</li>
      </ul>

      <h3>4.2 Currencies</h3>
      <ul>
        <li>Listings are priced in US dollars unless the seller chooses another currency (naira, pounds, euros or cedis).</li>
        <li><strong>Naira listings</strong> are paid in naira by card or bank transfer through Paystack, and the seller is paid in naira.</li>
        <li><strong>All other listings settle in US dollars.</strong> Dollar listings can be paid through Paystack (charged in naira at the day&apos;s exchange rate plus a small conversion margin) or in USDT. Pound, euro and cedi listings are paid in USDT, converted to dollars once, at the moment you bid, at a rate we record and show you.</li>
        <li>We use a published exchange rate that is refreshed regularly. If a current rate isn&apos;t available, payments in that currency pause until it is.</li>
      </ul>

      <h3>4.3 Bidding and buying</h3>
      <ul>
        <li><strong>Every bid is paid in full when you place it</strong>, plus a <strong>non-refundable bidding fee of 2.5%</strong> (minimum US$0.25, maximum US$10, or the naira equivalent). Buy Now purchases carry the same fee.</li>
        <li><strong>Bids are binding.</strong> You can&apos;t withdraw a bid. The seller can accept any open bid, not only the highest. When a listing ends, the seller has 48 hours to accept one; after that, the highest bid that meets the seller&apos;s reserve price wins automatically.</li>
        <li>If your bid doesn&apos;t win, or the listing closes without a sale, the amount of your bid goes back to your marketplace funds. The bidding fee is kept. Raising your own bid refunds your earlier bid (its fee is kept).</li>
        <li>Marketplace funds can be used for later bids, or refunded to where they came from: card payments are refunded to the same card through Paystack, and USDT is sent back to the address it came from. They can&apos;t be sent anywhere else.</li>
        <li>USDT payments must be sent from the wallet address you declared, for the exact amount shown, on the network shown. Payments sent to the wrong network or address, or for a different amount, may be lost and can&apos;t always be recovered.</li>
      </ul>

      <h3>4.4 Fees, royalties and earnings</h3>
      <ul>
        <li>On every sale we keep a 5% platform fee.</li>
        <li><strong>Royalties:</strong> when a creator first lists their work, they choose a royalty of 0% to 10%. That rate is fixed from the first sale onwards, and the creator receives it on every later resale. Nobody can change or remove it.</li>
        <li>The rest of the sale price goes to the seller as earnings, in the listing&apos;s settlement currency (naira or US dollars).</li>
        <li><strong>Earnings clear 30 days after the sale</strong> before they can be withdrawn, to protect against payment disputes.</li>
      </ul>

      <h3>4.5 Withdrawals</h3>
      <ul>
        <li>You can withdraw cleared earnings to a bank account in your own name (Nigerian banks, checked with your bank) or to a USDT address. Naira earnings can only be paid to a naira bank account. Dollar earnings paid to a naira bank account are converted at the day&apos;s rate.</li>
        <li>Every withdrawal is reviewed by our team. We may ask for proof of identity and may refuse or delay a withdrawal if we suspect fraud, self-dealing between connected accounts, a payment dispute, or a breach of these terms.</li>
        <li>The minimum withdrawal is US$10 (or the naira equivalent). You can have one withdrawal in progress at a time.</li>
        <li>If a payout fails, the money goes back to your balance.</li>
      </ul>

      <h3>4.6 How marketplace money is held</h3>
      <p>
        Money you pay for bids and purchases is held by us only to complete marketplace transactions: to pay sellers and creators,
        refund unsuccessful bids, and pay out earnings. <strong>We are not a bank, a payment service or a wallet service.</strong> Balances
        don&apos;t earn interest and can&apos;t be used for anything except the marketplace.
      </p>

      <h2>5. Promotions and ads</h2>
      <ul>
        <li>Post boosts and sponsored ads are paid with credits. Boosts start immediately; ads are reviewed before they run.</li>
        <li><strong>Not allowed in ads:</strong> gambling or betting, adult or sexual content, scams, get-rich-quick or investment schemes, misleading or false claims, weapons, drugs, counterfeit goods, and anything illegal. Ad links must use https.</li>
        <li>If your ad isn&apos;t approved, your credits are refunded. If an approved ad is later removed for breaking these rules, it is not refunded.</li>
        <li>Views and taps are counted once per person per day. We don&apos;t guarantee a number of views, taps or sales.</li>
        <li>If you stop a running promotion early, unused time isn&apos;t refunded. Stopping an ad before it is reviewed refunds it in full.</li>
      </ul>

      <h2>6. Account deletion</h2>
      <p>You can delete your account at any time in the app (Profile → Account &amp; Privacy) or on our <Link href="/delete-account">delete account page</Link>. When you do:</p>
      <ul>
        <li>Your open listings are cancelled and everyone who bid on them is refunded. Your own open bids are refunded to you.</li>
        <li>Your unused marketplace funds are refunded to the card or wallet they came from.</li>
        <li>Your cleared earnings are paid to your payout account. Earnings still clearing are paid when they clear.</li>
        <li><strong>Forfeited:</strong> unused credits; earnings you can&apos;t be paid because you have no usable payout account; and anything still unpaid 120 days after your request.</li>
        <li>Content you sold stays with its new owner, credited to &quot;deleted user&quot;. Your other content is deleted.</li>
        <li>We keep transaction records, without your name, for as long as the law requires. See our <Link href="/privacy">privacy policy</Link>.</li>
      </ul>

      <h2>7. Suspension</h2>
      <p>We can suspend or close accounts that break these terms, commit fraud, or put other users at risk. Money owed to other users, refunds and chargebacks are settled first; we may hold balances while we investigate.</p>

      <h2>8. Disclaimers and liability</h2>
      <p>
        The Service is provided &quot;as is&quot;. We don&apos;t guarantee it will always be available or error-free, or that any item will
        sell or keep its value. To the extent the law allows, we aren&apos;t liable for indirect or consequential losses, and our total
        liability to you is limited to the fees you paid us in the 12 months before the claim. Nothing in these terms limits rights you
        have under consumer law that can&apos;t be limited.
      </p>

      <h2>9. Changes</h2>
      <p>We may update these terms. If a change matters, we&apos;ll tell you in the app before it takes effect. Continuing to use the Service after that means you accept the new terms.</p>

      <h2>10. Law and contact</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. Questions or complaints: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
