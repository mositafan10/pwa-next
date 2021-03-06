import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Vazin!
          <p>A market place for plastic trading</p>
        </h1>
        <div className={styles.grid}>
            <Link href="/aboutus">
                <a className={styles.card}> درباره ما</a>
            </Link>
            <Link href="/contactus">
                <a className={styles.card}> تماس ما</a>
            </Link>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
