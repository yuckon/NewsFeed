import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'
import { Card, Col, Row, Descriptions, BackTop } from 'antd'
import { HeartTwoTone, CameraFilled } from '@ant-design/icons'
import 'antd/dist/antd.css'
import moment from 'moment'
import apiKey from '../apiKey'

export default function Home() {

  const [news, setNews] = useState([])
  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      const newNewsList = await response.json()
      setNews(newNewsList)
    }

    loadData()
  }, [])
  const { Meta } = Card
  console.log(news)

  return (

    <div className={styles.container}>
      <Row justify="center">
        <Col span={20}>
          <BackTop />
          <Head>
            <title>Photo Netz</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              <CameraFilled /> Welcome on Photo Netz ! <CameraFilled />
            </h1>
            <p />
            <p className={styles.description}>
              <div style={{ textAlign: 'center', fontStyle: 'italic', fontFamily: 'verdana', fontSize: '0.5em'}}>A flash don't wait, a moment that's all you need !</div>
            </p>

            <div className={styles.grid}>

              <div className="site-card-wrapper">
                <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }} justify={'center'}>
                  {news.map((e, index) => (
                    <Col span={{ xs: 2, sm: 4, md: 8, lg: 12 }}
                      style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3%', alignContent: 'center', alignItems: 'center' }}
                      key={index}>
                      <Link href={{ pathname: `/photo/${index}`, query: { object: JSON.stringify(e) } }}>
                        <a>
                          <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={e.alt_description} src={e.links.download} />}
                          >
                            <Descriptions size="middle" column={1}>
                              <Descriptions.Item>
                                <div style={{ fontWeight: 'bold' }}>{e.likes} <HeartTwoTone twoToneColor="#FF4033" /></div>
                              </Descriptions.Item >
                            </Descriptions>
                            <Meta title={`${e.user.name}`} description={` ${moment(e.user.updated_at).format("MMMM-Do-YYYY")}`} />
                          </Card>
                        </a>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </main>
        </Col>
      </Row>
      <footer className={styles.footer}>
        <a
          href="https://heroku.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/heroku.png" alt="Heroku Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
