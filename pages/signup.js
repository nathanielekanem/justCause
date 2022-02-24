import Head from 'next/head';
import styles from "../styles/Signup.module.css";

function Signup() {
  return (
    <div className="styles.container">
      <Head>
        <title>~ JustCause ~ Signup</title>
        <meta name="description" content="Signup on JustCause today!" />
        <link rel="icon" href="/JC-icon-resized.png" />
      </Head>

      <h1>Sign Up</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Creator &rarr;</h2>
        </div>
        <div className={styles.grid}>
          <h2>User &rarr;</h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
