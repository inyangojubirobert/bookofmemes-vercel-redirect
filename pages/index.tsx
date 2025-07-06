// pages/index.tsx
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book of Memes</title>
        <meta name="description" content="Email confirmed successfully" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <main className={styles.main}>
          <h1>✅ Email Confirmed!</h1>
          <p>Thanks for verifying your email. You're all set to explore Book of Memes.</p>
        </main>
      </div>
    </>
  );
}
