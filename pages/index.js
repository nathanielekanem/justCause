import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JustCause</title>
        <meta
          name="description"
          content="JustCause is a platform for creating and redistributing content like art, music, books and even videos! Join Us now and be one of the first to share your content with the world! Click here to join."
        />
        <link rel="apple-touch-icon" href="/jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to JustCause!</h1>
        <br />
        <br />

        <div className={styles.grid}>
          <a href="./" className={styles.card}>
            <h2>Music &rarr;</h2>
            <p>Coming soon...</p>
          </a>

          <a href="./" className={styles.card}>
            <h2>Books &rarr;</h2>
            <p>Coming soon...</p>
          </a>

          <a href="./" className={styles.card}>
            <h2>Movies &rarr;</h2>
            <p>Coming soon...</p>
          </a>
        </div>
        <h3 className={styles.description}>
          <a
            href="https://justcause.vercel.app/waitlist-signupp"
          >
          Signup to JustCause and join the wait list.
          </a>
        </h3>
      </main>

      <footer className={styles.footer}>
        {/*<a href="./">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>*/}
        <a href="https://www.minekglobal.com" rel="noopener noreferrer" target="_blank">
          Sponsored by Minek Global
          {/*<span className={styles.logo}>
            <Image src="https://www.minekglobal.com/Minek%20Global%20Business%20Nigeria%20Limited_files/logo.png" alt="Minek Logo" width={72} height ={22} />
        </span>*/}
        </a>
      </footer>
    </div>
  );
}
