import Head from "next/head";
import styles from "../styles/waitlistLogin.module.css";

export default function waitlistLogin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Be one of the first to join JustCause waitlist and get 200JCT instantly."
        />
        <link rel="apple-touch-icon" href="jcFinalIcon.png" />
        <link rel="icon" href="jcFinalIcon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>JustCause</h1>
        <br />
        <br />
        <div className={styles.form}>
          <ul id="form-error-messages"></ul>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" spellCheck="false" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button type="submit" id="btn-submit">
            Login
          </button>
        </div>
      </main>
    </div>
  );
}

{/** Style Login form */}