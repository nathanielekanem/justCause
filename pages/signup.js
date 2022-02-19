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

      <footer className={styles.footer}>
        {/*<a href="./">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>*/}
        <a href="https://www.minekglobal.com" rel="noopener noreferrer">
          Sponsored by Minek Global
          {/*<span className={styles.logo}>
            <Image src="https://www.minekglobal.com/Minek%20Global%20Business%20Nigeria%20Limited_files/logo.png" alt="Minek Logo" width={72} height ={22} />
        </span>*/}
        </a>
      </footer>
    </div>
  )
}