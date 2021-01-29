import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'
import apiKey from '../apiKey'
import { Card, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'

export default function Home() {
 
  const [news, setNews] = useState([])
  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=fr&' + `apiKey=${apiKey}`)
      const newNewsList = await response.json()
      setNews(newNewsList.articles)
    }

    loadData()
  }, [])
  const { Meta } = Card

  return (

    <div className={styles.container}>

      <Head>
        <title>News Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur News Feed !
        </h1>
        <p />
        <p className={styles.description}>
          <code className={styles.code}>Les nouvelles n'attendent pas, des informations c'est tout ce que vous avez</code>
        </p>

        <div className={styles.grid}>

          <div className="site-card-wrapper">
            <Row gutter={{ xs: 2, sm: 4, md: 8, lg: 16 }} justify={'center'}>
              {news.map((e, index) => (
                <Col span={{ xs: 1, sm: 2, md: 4, lg: 8 }}
                  style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3%', alignContent: 'center', alignItems: 'center' }}
                  key={index}>
                  <Link href={{ pathname:`/article/${index}`,query: { object: JSON.stringify(e) }}} prefetch={false}>
                    <a>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="Image Introuvable" src={e.urlToImage} />}
                    >
                      <Meta title={e.title} description={`${e.source.name} : ` + ` ${moment(e.publishedAt).format("DD-MM-YYYY HH:mm")}`} />
                    </Card>
                    </a>
                  </Link>
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
