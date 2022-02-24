import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~ JustCause ~</title>
        <meta name="description" content="JustCause Foundation 2022" />
        <link rel="icon" href="/JC-icon-resized.png" />
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
          {/*<a
            href="./" // ./signup
            className={styles.loginLink}
          >*/}
            Signup to JustCause and join the wait list.
          {/*</a>*/}
        </h3>
      </main>

      <footer className={styles.footer}>
        {/*<a href="./">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>*/}
        <a href="https://www.minekglobal.com" rel="noopener noreferrer">
          Sponsored by Minek Global
          {/*<span className={styles.logo}>
            <Image src="https://www.minekglobal.com/Minek%20Global%20Business%20Nigeria%20Limited_files/logo.png" alt="Minek Logo" width={72} height ={22} />
        </span>*/}
        </a>
      </footer>
    </div>
  );
}
