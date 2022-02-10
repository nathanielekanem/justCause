import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~ JustCause ~</title>
        <meta name="description" content="JustCause Foundation 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to JustCause!
        </h1>

        <h4>Brought to you by Ekanem Nathaniel</h4>


        <div className={styles.grid}>
          {//<a href="./" className={styles.card}>
          }
          {//  <h2>Dashboard &rarr;</h2>
          }
          {//  <p>Coming soon...</p>
          }
          {//</a>
          }

          <a href="./" className={styles.card}>
            <h2>Music &rarr;</h2>
            <p>Coming soon...</p>
          </a>

          <a
            href="./"
            className={styles.card}
          >
            <h2>Books &rarr;</h2>
            <p>Coming soon...</p>
          </a>

          <a
            href="./"
            className={styles.card}
          >
            <h2>Movies &rarr;</h2>
            <p>
              Coming soon...
            </p>
          </a>
  </div>
      </main>

      <footer className={styles.footer}>
        <a href="./">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <a href="www.minekglobal.com">
          Sponsored by{' '}
          <span className={styles.logo}>
            <Image src="https://www.minekglobal.com/Minek%20Global%20Business%20Nigeria%20Limited_files/logo.png" alt="Minek Logo" width={72} height ={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

// rel="noopener noreferrer"
