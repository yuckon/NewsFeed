import React from 'react'
import 'antd/dist/antd.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, PageHeader, Descriptions, Image, Layout } from 'antd'
import moment from 'moment'

function Details({ router: { query } }) {

    const article = JSON.parse(query.object)
    let articleContentPlus = article.content.split('…')
    article.content = articleContentPlus[articleContentPlus.length - 2]
    console.log(article)

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
                    title={article.title}
                    style={{}}
                >
                    <Descriptions size="middle" column={1}>
                        <Descriptions.Item>
                            <div>{article.description}</div>
                        </Descriptions.Item >
                        <Descriptions.Item id="imageArticle">
                            <Image src={article.urlToImage} alt="Image Non Disponible"/>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <div style={{ fontSize: '1.2em' }}>{article.content}...<a href={article.url}>[Voir plus ici]</a></div>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <div style={{ fontStyle: 'italic' }}>{article.source.name} - {moment(article.publishedAt).format("DD-MM-YYYY HH:mm")}</div>
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