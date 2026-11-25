// Child safety standards (Google Play's child safety standards policy for social apps).
// Every practice described here is real in the app and backend as of 2026-11-25:
// 18+ accounts only, in-app reporting with a child-safety reason (migration 092), urgent admin
// alerts, removal and account suspension (Profile → Reports), and a Bascardo AI request filter
// that refuses picture/video prompts pairing minors with sexual content (utils/runwareClient.js).
import Link from 'next/link';
import LegalPage, { CONTACT_EMAIL } from '../components/LegalPage';

export default function ChildSafety() {
  return (
    <LegalPage title="Child Safety Standards" description="Book of Memes standards against child sexual abuse and exploitation (CSAE), how to report it, and how we act on reports.">
      <p>
        Book of Memes has <strong>zero tolerance</strong> for child sexual abuse and exploitation (CSAE) and child sexual abuse material
        (CSAM). This page sets out our standards for the Book of Memes app and website, how to report a concern, and what we do about it.
      </p>

      <h2>1. What is not allowed</h2>
      <ul>
        <li>Any content that sexualises a child or shows, describes or links to child sexual abuse, including drawn, animated and AI-generated material.</li>
        <li>Grooming: contacting, befriending or messaging a child with the aim of sexual abuse or exploitation.</li>
        <li>Sextortion, trafficking, or any attempt to obtain sexual images of a child.</li>
        <li>Sharing, requesting or advertising CSAM anywhere on Book of Memes, including in posts, comments, messages, profiles and marketplace listings.</li>
      </ul>
      <p>Breaking these rules leads to immediate removal of the content and permanent suspension of the account.</p>

      <h2>2. Who can use Book of Memes</h2>
      <p>
        Book of Memes is for adults aged 18 and over. Children must not have accounts. The For Kids collections are made for parents to
        use with their children, and Bascardo AI keeps kids posts free of unsuitable words and themes.
      </p>

      <h2>3. How we prevent it</h2>
      <ul>
        <li>Bascardo AI refuses any picture or video request that pairs a minor with sexual content, before it reaches an AI model, and the AI models we use apply their own safety filters.</li>
        <li>Every post, comment and account has a <strong>Report</strong> option in the app, with a dedicated <strong>Child sexual abuse or exploitation</strong> reason.</li>
        <li>Anyone can <strong>block</strong> another user, which hides their posts and comments and stops them messaging.</li>
      </ul>

      <h2>4. How to report a concern</h2>
      <ol>
        <li>
          <strong>In the app:</strong> tap <strong>⋯</strong> on the post or profile (or long-press a comment) → <strong>Report</strong> →
          <strong> Child sexual abuse or exploitation</strong>.
        </li>
        <li>
          <strong>By email:</strong> write to <a href={`mailto:${CONTACT_EMAIL}?subject=Child%20safety%20report`}>{CONTACT_EMAIL}</a> with the subject
          &quot;Child safety report&quot;, and include a link to or description of the content or account. Do not send the material itself.
        </li>
        <li>
          If a child is in immediate danger, contact your local police first. You can also report CSAM directly to the
          {' '}<a href="https://report.cybertip.org/" target="_blank" rel="noreferrer">NCMEC CyberTipline</a> or the
          {' '}<a href="https://www.iwf.org.uk/report/" target="_blank" rel="noreferrer">Internet Watch Foundation</a>.
        </li>
      </ol>

      <h2>5. What we do when something is reported</h2>
      <ul>
        <li>Child safety reports go to the top of our moderation queue, and the moderation team is alerted at once.</li>
        <li>We review them and act within 24 hours: we remove the content and suspend the account so it can no longer sign in.</li>
        <li>Where we find apparent CSAM, we preserve the information required by law and report it to the National Center for Missing &amp; Exploited Children (NCMEC) and to the relevant national authorities, including the police in the country concerned.</li>
        <li>We cooperate with law enforcement requests made through lawful process.</li>
      </ul>

      <h2>6. Child safety contact</h2>
      <p>
        Our designated contact for child safety and CSAM prevention can be reached at{' '}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Child%20safety`}>{CONTACT_EMAIL}</a>. See also our{' '}
        <Link href="/terms">terms</Link> and <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
