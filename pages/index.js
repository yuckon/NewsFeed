import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import apiKey from '../apiKey'

export default function Home() {


  const [news, setNews] = useState([])
  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://newsapi.org/v2/top-headlines?' + 'country=fr&' + `apiKey=${apiKey}`)
      const newNewsList = await response.json()
      setNews(newNewsList.articles)
      console.log(news)
    }

    loadData()
  }, [])

  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>

          {news.map((e, index) => (
            <div key={index}>
              {/* <Link href="/"> */}
                <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>{e.title}</h3>
                <p>Find in-depth information about Next.js features and API.</p>
                </a>
              {/* </Link> */}
            </div>
          ))}
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
