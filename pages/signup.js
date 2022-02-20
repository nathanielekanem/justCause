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
          <div className={styles.flyerFeatures}>
              <h2>Features</h2>
              
                  <li>Friendly General Assistant</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Insights</li>
                  <li>Hardworking Details Assistant</li>
              
          </div>
          <div className={styles.flyer}>
              <h2>Entertainer</h2>
              
                  <li>Yes</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>Yes</li>
                  <li>Yes</li>
              
          </div>
          <div className={styles.flyer}>
              <h2>jC user</h2>
              
                  <li>Yes</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>No</li>
                  <li>No</li>
              
          </div>
          <div className={styles.flyer}>
              <h2>Non User</h2>
              
                  <li>No</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>No</li>
                  <li>No</li>
              
          </div>
        </div>
      </main>
    </div>
  )
}