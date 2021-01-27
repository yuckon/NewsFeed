import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'
import apiKey from '../apiKey'
import { Card, Col, Row } from 'antd'
import 'antd/dist/antd.css'

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

  const { Meta } = Card;


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

          <div className="site-card-wrapper">
            <Row gutter={{ xs: 2, sm: 4, md: 8, lg: 16 }} style={{alignContent: 'center', alignItems: 'center'}}>
                {news.map((e, index) => (
                  <Col span={{xs: 1, sm: 2, md:4, lg:8}} 
                  style={{display: 'flex', flexWrap: 'wrap', marginTop: '3%', alignContent: 'center', alignItems: 'center'}} 
                  key={index}>
                    <Card
                      hoverable
                      style={{ width: 240}}
                      cover={<img alt="example" src={e.urlToImage} />}
                    >
                      <Meta title={e.title} description={e.publishedAt} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
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
