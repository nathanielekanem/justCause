// justcause.vercel.app/signup

import Head from 'next/head'
import styles from '../styles/Signup.module.css'

function signup() {
  return (
      <div className={styles.container}>
        <Head>
            <title>~ JustCause ~ Signup</title>
            <meta name="description" content="Signup to JustCause" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 
        className={styles.header}>
            SIGNUP
        </h1>
      </div>    
  )
}

export default signup;