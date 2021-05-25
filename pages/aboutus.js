import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function About() {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <p>About Us</p>
            <p>Erfan GT</p>
  
          </h1>
          <div className={styles.grid}>
            <Link href="/contactus">
                <a className={styles.card}> تماس ما</a>
            </Link>
            <Link href="/">
                <a className={styles.card}>صفحه اصلی</a>
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