// Deleting some data without deleting the account (Google Play's optional "Delete data URL").
// Every step here is something the app really does: checked against the app code on 2026-11-25
// (My content delete, comment delete, message delete that wipes the text and attachment,
// Bascardo AI Gallery remove, profile edit, unlike/unbookmark/unfollow).
import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL } from '../components/LegalPage';

export default function DeleteData() {
  return (
    <LegalPage title="Delete some of your Book of Memes data" description="How to delete your posts, comments, messages, AI creations and profile details in Book of Memes without deleting your account.">
      <p>
        You can delete most of your data in the Book of Memes app yourself, at any time, without deleting your account.
        Each item is deleted as soon as you confirm. To delete everything, see{' '}
        <Link href="/delete-account">Delete your Book of Memes account</Link>.
      </p>

      <h2>How to delete each kind of data</h2>
      <ol>
        <li>
          <strong>Your posts</strong> (stories, chapters, memes, puzzles, kids posts, books, music, podcasts and TV episodes):{' '}
          Profile → <strong>My content</strong> → open the post → <strong>Delete</strong>. A post that is listed on the marketplace
          can be deleted after you cancel the listing. A post you have sold belongs to its buyer and stays with them.
        </li>
        <li>
          <strong>Your comments:</strong> open the comments on the post → tap <strong>Delete</strong> under your comment.
        </li>
        <li>
          <strong>Your chat messages:</strong> in a conversation, long-press your message → <strong>Delete</strong>. The text and
          any photo, video or voice note in it are erased for everyone in the chat.
        </li>
        <li>
          <strong>Pictures, videos and audio made with Bascardo AI:</strong> Bascardo AI Studio → <strong>Gallery</strong> → open
          the item → <strong>Remove from gallery</strong>.
        </li>
        <li>
          <strong>Profile details</strong> (photo, bio, WhatsApp number): Profile → <strong>Edit profile</strong> → clear or change
          them → Save.
        </li>
        <li>
          <strong>Likes, bookmarks and follows:</strong> tap the same icon again (or <strong>Unfollow</strong> on the profile) to
          remove it.
        </li>
      </ol>

      <h2>What is deleted and what is kept</h2>
      <ul>
        <li><strong>Deleted straight away:</strong> the posts, comments, messages, gallery items and profile details you delete as above.</li>
        <li><strong>Kept for up to 30 days:</strong> copies in our encrypted backups, which are then overwritten.</li>
        <li>
          <strong>Kept while your account is open:</strong> payment, wallet, marketplace and payout records, because tax and
          anti-fraud laws require them (usually up to 6 years). They are removed from your name if you delete your account.
        </li>
        <li><strong>Kept with the buyer:</strong> posts you have sold on the marketplace.</li>
      </ul>

      <h2>Anything else</h2>
      <p>
        To delete data that the app has no button for (for example a custom voice you recorded, invites you sent, or your
        report history), email <a href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20data`}>{CONTACT_EMAIL}</a> from the address
        on your account with the subject &quot;Delete my data&quot; and say what you want deleted. We&apos;ll confirm it&apos;s
        you and delete it within 30 days.
      </p>
      <p>
        Full details are in our <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
