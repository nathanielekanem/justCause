import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import Presignup from "../components/signupForm/Presignup"
import styles from "../styles/waitlistSignup.module.css";


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

      <Presignup />
    </div>
  );
}

export default waitlistSignup