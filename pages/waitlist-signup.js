import Head from "next/head";
import styles from "../styles/waitlistSignup.module.css";
import Signupform from "../components/signupform/Signupform";

function waitlistSignup() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Signup</title>
        <meta
          name="description"
          content="Be one of the first to join JustCause waitlist and get 200JCT instantly."
        />
        <link rel="apple-touch-icon" href="jcFinalIcon.png" />
        <link rel="icon" href="jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Signup Early</h1>
        <h2 className={styles.description}>Lets grow the family together!</h2>
        <br />
      </main>

      {/** form starts */}
      <Signupform />
    </div>
  );
}

export default waitlistSignup;
