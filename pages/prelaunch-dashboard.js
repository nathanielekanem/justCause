{/** Add loader here (the animated "JustCause" text) */}
{/** Increase width of page... let the text be closer to the edges of the screen. */}


import Head from "next/head";
import styles from "../styles/prelaunch-dashboard.module.css";

export default function prelaunchDashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JustCause</title>
        <meta
          name="description"
          content="JustCause is a platform for creating and redistributing content like art, music, books and even videos! Join Us now and be one of the first to share your content with the world! Click here to join."
        />
        <link rel="apple-touch-icon" href="/jcFinalIcon.png" />
        <link rel="icon" href="jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>JustCause</h1>
        <br />
        <br />

        <div className={styles.details}>
            {/** Refer to note book */}
        </div>
        <div className={styles.referralDetails}>
            {/** Refer to note book */}
        </div>
      </main>
    </div>
  );
}