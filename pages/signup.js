import Head from 'next/head'
import styles from '../styles/Signup.module.css'

export default function Signup() {
  return (
    <div className={styles.senior}>
      <Head>
        <title>~ JustCause ~ Signup</title>
        <meta name="description" content="Join JustCause Today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <h1 className={styles.title}>
          Signup
        </h1>
        <div className={styles.featuresGrid}>
          <div className={styles.flyer}>
              <h2>Features</h2>
              <ul>
                  <li>Friendly General Assistant</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Insights</li>
                  <li>Hardworking Details Assistant</li>
              </ul>
          </div>
          <div className={styles.flyer}>
              <h2>Entertainer</h2>
              <ul>
                  <li>Yes</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Yes</li>
                  <li>Yes</li>
              </ul>
          </div>
          <div className={styles.flyer}>
              <h2>jC user</h2>
              <ul>
                  <li>Yes</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>No</li>
                  <li>No</li>
              </ul>
          </div>
          <div className={styles.flyer}>
              <h2>Non User</h2>
              <ul>
                  <li>No</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>No</li>
                  <li>No</li>
              </ul>
          </div>
        </div>
      </main>
    </div>
  )
}