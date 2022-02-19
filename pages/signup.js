import Head from 'next/head'
import styles from '../styles/Signup.module.css'

export default function Signup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~ JustCause ~ Signup</title>
        <meta name="description" content="Join JustCause Today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <h1 className={styles.title}>
          Signup
        </h1>
      </main>

      <body>
          <div className={styles.features}>
              <ul>
                  <li>Friendly Assistant</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.entertainer}>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.user}>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.nonUser}>
              <ul>
                  <li>nope</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
      </body>
    </div>
  )
}