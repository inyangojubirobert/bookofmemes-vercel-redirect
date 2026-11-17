import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL } from '../components/LegalPage';

// The marketplace rules in plain language. The app shows short excerpts of
// these where people bid, buy, list and add funds (components/MarketInfoTip.js
// in the app); keep both in step. Numbers here mirror market_settings.
export default function MarketplaceRules() {
  return (
    <LegalPage title="Marketplace rules" description="What you get when you win a Book of Memes auction, how bidding, fees, deadlines, refunds and deposits work.">
      <p>
        The Book of Memes marketplace is an auction marketplace for digital items made and owned on Book of Memes: memes,
        stories, music, podcasts, videos and other posts. Prices are set by bidders. These rules are part of our{' '}
        <Link href="/terms">Terms of Service</Link>; if anything here seems to conflict with them, the Terms apply.
      </p>

      <h2>1. What winning gets you</h2>
      <ul>
        <li><strong>Ownership on Book of Memes.</strong> When you win an auction or Buy Now, the item becomes yours on Book of Memes: it shows as owned by you, its ownership history records the sale, and you can resell it on the Book of Memes marketplace.</li>
        <li><strong>Only on Book of Memes.</strong> This ownership is a record kept by Book of Memes. It exists only on Book of Memes and can&apos;t be moved to another platform, wallet or blockchain.</li>
        <li><strong>No copyright or outside use.</strong> Winning does not give you the copyright or any other intellectual-property rights in the item, and doesn&apos;t give you the right to use, copy or sell it outside Book of Memes. The creator keeps their copyright.</li>
        <li><strong>Royalties stay with the creator.</strong> When an item is resold, its original creator receives the royalty set when they first listed it (0% to 10%, usually 5%), on every resale. Nobody can remove it. There is no royalty on the creator&apos;s own first sale.</li>
        <li><strong>Not an investment.</strong> Items are collectibles for enjoying and trading on Book of Memes. We don&apos;t promise that any item will sell, keep its value or go up in value, and you shouldn&apos;t buy one expecting a profit.</li>
        <li>An item is owned by one person at a time and can only be sold once per listing; every change of owner is recorded.</li>
      </ul>

      <h2>2. Listing an item</h2>
      <ul>
        <li>You can only list items you currently own on Book of Memes. Listing costs a non-refundable fee of US$0.50 in credits.</li>
        <li>There are two kinds of listing:
          <ul>
            <li><strong>Auction:</strong> people bid; you choose how long it runs (1, 3, 7 or 14 days; 7 by default). You can also give an auction a Buy Now price: anyone can pay it to end the auction straight away, and bids can&apos;t reach it.</li>
            <li><strong>Fixed price:</strong> no bidding; the first person to pay the price buys it. It runs 3, 7, 14 or 30 days.</li>
          </ul>
        </li>
        <li><strong>Reserve price (optional):</strong> the lowest price you want for an auction. Bidders can&apos;t see it. If you don&apos;t pick a winner yourself, only a bid at or above your reserve can win automatically. You can still choose to accept a lower bid yourself.</li>
        <li><strong>When you sell,</strong> Book of Memes keeps a 5% platform fee and, on a resale, the creator&apos;s royalty. You receive the rest (see section 7).</li>
        <li><strong>Withdrawing a listing:</strong> you can withdraw a listing only while it has no paid bids. Once someone has bid, it can&apos;t be withdrawn: accept a bid, or let it end. Book of Memes can also withdraw a listing (for example for fraud, a rules breach or account deletion); every bid on it is then refunded.</li>
        <li>While an item is listed, and after it is sold, it can&apos;t be edited or deleted.</li>
        <li><strong>Bids are binding on you too.</strong> If you accept a bid, or your auction ends with a bid that meets your reserve, the item passes to the buyer.</li>
      </ul>

      <h2>3. Bidding and buying</h2>
      <ul>
        <li><strong>Every bid is paid in full when you place it</strong> and held until the listing is decided. Buy Now is paid immediately.</li>
        <li>Each bid and Buy Now carries a <strong>bidding fee of 2.5%</strong> (minimum US$0.25, maximum US$10, or the naira equivalent). The bidding fee is not refunded.</li>
        <li><strong>Bids are binding.</strong> You can&apos;t withdraw a bid.</li>
        <li><strong>Raising your bid:</strong> you place a new, higher bid. Your earlier bid is refunded to your funds, but its fee is kept, and the new bid pays the 2.5% fee on its full amount. For example, raising a US$40 bid to US$60 costs a further US$1.50 in fees (2.5% of US$60).</li>
        <li>The owner may accept any open bid, not only the highest, and may accept a bid below their reserve.</li>
        <li>You can&apos;t bid on a fixed-price listing; use Buy Now instead.</li>
      </ul>

      <h2>4. Deadlines and what happens when a listing ends</h2>
      <ol>
        <li><strong>The end date</strong> is shown on every listing, with a countdown.</li>
        <li>24 hours before the end, the owner and everyone with an open bid get a notification. Bidders are also told whether they&apos;re winning, and get a notification whenever someone outbids them.</li>
        <li><strong>After the end, the owner has 48 hours to accept a bid.</strong></li>
        <li>If they don&apos;t, <strong>the highest bid that meets the reserve wins automatically</strong>.</li>
        <li>If no bid meets the reserve, the listing ends unsold, every bid is refunded and the owner is told.</li>
      </ol>
      <p>Deadlines are checked every few minutes, so outcomes can appear a few minutes after the exact time.</p>

      <h2>5. What everyone can see</h2>
      <p>Each listing shows a public status so buyers and sellers can follow it:</p>
      <ul>
        <li>when bidding ends, and the owner&apos;s decision deadline once it has ended;</li>
        <li>how many bids and bidders there are, and the top bid;</li>
        <li>when it sold, the price, the buyer&apos;s username, and whether the owner accepted the bid or it won automatically;</li>
        <li>how many bids were refunded, and whether the listing ended unsold or was withdrawn.</li>
      </ul>
      <p>We don&apos;t show who placed which bid. Ownership history (who owned an item and what it sold for) is public.</p>

      <h2>6. Refunds</h2>
      <ul>
        <li>Bids that don&apos;t win, and every bid on a listing that ends unsold or is withdrawn, go back to the bidder&apos;s <strong>marketplace funds</strong> as soon as the listing is decided. The bidding fee is kept.</li>
        <li>Marketplace funds can be used for later bids, or refunded to where the money came from: card payments to the same card through Paystack, USDT to the address it came from, and wallet-link deposits back through the same wallet app to the account that paid. Refunds are reviewed by our team before they are sent, and we aim to send approved refunds within 5 business days.</li>
        <li>Fees (bidding fees, deposit fees and currency conversion) are not refunded.</li>
      </ul>

      <h2>7. Fees at a glance</h2>
      <table className="legal-table">
        <thead><tr><th>Fee</th><th>Who pays</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>Listing fee</td><td>Seller</td><td>US$0.50 in credits</td></tr>
          <tr><td>Bidding fee</td><td>Buyer</td><td>2.5% per bid or Buy Now (min US$0.25, max US$10)</td></tr>
          <tr><td>Platform fee</td><td>Seller</td><td>5% of the sale price</td></tr>
          <tr><td>Creator royalty</td><td>Seller, on resales</td><td>Set by the creator, 0% to 10% (usually 5%)</td></tr>
          <tr><td>Naira for dollar listings</td><td>Buyer</td><td>Day&apos;s exchange rate plus 1.5%</td></tr>
          <tr><td>Wallet-link deposit</td><td>Buyer</td><td>2% (at least US$0.30), plus 1.5% conversion for non-dollar currencies</td></tr>
        </tbody>
      </table>
      <p>Sellers receive the rest of the sale price as earnings, which can be withdrawn 30 days after the sale.</p>

      <h2>8. Adding funds</h2>
      <p>
        Funds never limit how much you can bid: you can add as many deposits as you need, and they add up. You can add funds
        before bidding, or straight from the payment screen when a bid needs more.
      </p>
      <ul>
        <li><strong>Card or bank (Paystack):</strong> in naira. Pays for naira listings, or for dollar listings at the day&apos;s exchange rate plus 1.5%.</li>
        <li><strong>USDT</strong> on TRON or BSC, added 1:1 to dollar funds once confirmed on the blockchain.</li>
        <li>
          <strong>Wallet payment link (international):</strong> pay in US dollars, euros, pounds, yen, yuan, Australian, Canadian,
          Hong Kong or Singapore dollars, or Swiss francs through a regulated wallet app&apos;s payment link. Choose a package
          (about US$5 to US$50,000), an any-amount link, or let the app combine packages to cover the amount you need. Any extra
          stays in your funds.
        </li>
      </ul>

      <p>
        <strong>Exchange rates</strong> come from ExchangeRate-API&apos;s published daily rates (open.er-api.com). If a current rate isn&apos;t
        available, payments in that currency pause until it is. The rate used is shown before you pay.
      </p>

      <h3>8.1 How wallet-link deposits are confirmed</h3>
      <ol>
        <li>You start a deposit and get a code (for example BOM-7F3A9C) and the name of a Book of Memes deposit agent.</li>
        <li>You pay through the link, then enter the name on your wallet account and the transaction ID your wallet app shows. You can message the agent on WhatsApp from the app.</li>
        <li>The agent checks the payment in the wallet app&apos;s own records and confirms it. Only then are your funds credited, in US dollars at the day&apos;s rate less the fees above.</li>
      </ol>
      <ul>
        <li>Deposits of US$1,000 or more are confirmed by a Book of Memes administrator. Link deposits are limited to US$50,000 a day.</li>
        <li>Each wallet transaction can be used for one deposit only. If less than the package amount arrives, the deposit is not confirmed and the agent will sort it out with you.</li>
        <li>A deposit you don&apos;t pay within 48 hours expires. Don&apos;t pay an expired deposit; start a new one.</li>
        <li><strong>Agents never message you first.</strong> Only contact the agent named on your deposit in the app, using the WhatsApp button there, and check the number matches.</li>
        <li><strong>Agents never ask for your password, PIN, card details or one-time codes,</strong> and never ask you to pay anywhere other than the link shown in the app. If someone does, it isn&apos;t us: report it to support.</li>
      </ul>

      <h2>9. If you delete your account</h2>
      <ul>
        <li>Your open listings are withdrawn and their bids refunded; your own open bids are refunded to you.</li>
        <li>Your marketplace funds are refunded to where they came from, and cleared earnings are paid to your payout account (earnings still clearing are paid when they clear).</li>
        <li>Items you bought can&apos;t be moved to another account. Your ownership ends: the item shows as owned by &quot;deleted user&quot; and can&apos;t be resold.</li>
        <li>Earnings that can&apos;t be paid (no usable payout account) or are still unpaid 120 days after your request are forfeited. Full details are in the <Link href="/terms">Terms</Link>, section 6.</li>
      </ul>

      <h2>10. Fair play</h2>
      <ul>
        <li>Bidding on your own listings, using several accounts, or arranging bids with others to inflate prices is not allowed. We can cancel affected sales, refund buyers and close accounts.</li>
        <li>We may pause a listing, a deposit or a payout while we check a problem, a payment dispute or suspected fraud.</li>
      </ul>

      <h2>11. Problems and disputes</h2>
      <p>
        If something goes wrong with a listing, a bid, a deposit or a payout, email us first and we&apos;ll look into it. Disputes are
        governed by our <Link href="/terms">Terms of Service</Link> and the laws of the Federal Republic of Nigeria (Terms, section 10).
      </p>

      <p>Questions about a listing, a bid or a deposit? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the listing name or deposit code.</p>
    </LegalPage>
  );
}
