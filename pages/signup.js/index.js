import Head from 'next/head';
import Link from 'next/link';
import styles from "../../styles/Signup.module.css";

function Signup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~ JustCause ~ Signup</title>
        <meta name="description" content="Signup on JustCause today!" />
        <link
          rel="icon"
          href="../../public/Dada's because nathan sucks at making logos and practically anything else!!!"
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="https://justcause.vercel.app/signup/creator">
              <h2>creator &rarr;</h2>
              <p>Signup as a content creator.</p>
            </Link>
          </div>
          <div className={styles.card}>
            <h2>user &rarr;</h2>
            <p>Signup as a regular jC user.</p>
          </div>
          <div className={styles.card}>
            <h2>non-jC user</h2>
            <p>Don't signup...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
