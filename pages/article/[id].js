import { useState, useEffect } from 'react'
import React from 'react'
import apiKey from '../../apiKey'
import 'antd/dist/antd.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, PageHeader, Descriptions, Image, Layout } from 'antd'
import moment from 'moment'

function Details({ router: { query } }) {

    const id = query.id
    const [article, setArticle] = useState(JSON.parse(query.object))
    useEffect(() => {
      async function loadData() {
        const response = await fetch('http://newsapi.org/v2/top-headlines?' + 'country=fr&' + `apiKey=${apiKey}`)
        const newArticleList = await response.json()
        let currentArticle = newArticleList.articles[id]
        let articleContentPlus = currentArticle.content.split('…')
        currentArticle.content = articleContentPlus[articleContentPlus.length - 2]
        setArticle(currentArticle)
      }
  
      loadData()
    })

    const { Footer } = Layout;

    return (
        <div className="site-card-wrapper">
            <Breadcrumb style={{ padding: "1%", backgroundColor: '#87CEFA' }}>
                <Breadcrumb.Item> </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">Home</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-page-header-ghost-wrapper">
            <Divider style={{marginTop: 0}}/>
                <PageHeader
                    ghost={false}
                    title={article.title || "Titre"}
                >
                    <Descriptions size="middle" column={1}>
                        <Descriptions.Item>
                            <div>{article.description || "Description"}</div>
                        </Descriptions.Item >
                        <Descriptions.Item id="imageArticle">
                            <Image src={article.urlToImage || "urlImage"} alt="Image Non Disponible"/>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <div style={{ fontSize: '1.2em' }}>{article.content || "Contenu"}...<a href={article.url || "urlArticle"}>[Voir plus ici]</a></div>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <div style={{ fontStyle: 'italic' }}>{article.source.name || "Publicateur"} - {moment(article.publishedAt || "DateDePublication").format("DD-MM-YYYY HH:mm")}</div>
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <Divider/>
                <Footer id="footerArticle">
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
                    </a></Footer>
            </div>
        </div>
    )
}

export default withRouter(Details)