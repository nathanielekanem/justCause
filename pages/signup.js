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

      <body className={styles.container}>
          <div className={styles.features}>
              <h3>Features</h3>
              <ul>
                  <li>Friendly Assistant</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.entertainer}>
              <h3>Entertainer</h3>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.user}>
              <h3>jC user</h3>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div className={styles.nonUser}>
              <h3>Non User</h3>
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