import React from 'react'
import 'antd/dist/antd.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, PageHeader, Descriptions, Image } from 'antd'
import moment from 'moment'


function Details({ router: { query } }) {

    const article = JSON.parse(query.object)
    let articleContentPlus = article.content.split('…')
    article.content = articleContentPlus[articleContentPlus.length-2]
    console.log(article)



    return (
        <div className="site-card-wrapper">
            <Breadcrumb style={{ padding: "1%", backgroundColor: 'gray' }}>
                <Breadcrumb.Item> </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">Home</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Divider style={{ marginTop: '0' }} />
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title={article.title}
                >
                    <Descriptions size="middle" column={1}>
                        <Descriptions.Item>
                            <div>{article.description}</div>
                        </Descriptions.Item >
                        <Descriptions.Item>
                            <Image src={article.urlToImage}/>
                        </Descriptions.Item>
                        <Descriptions.Item>
                            <div>{article.content}...<a href={article.url}>[Voir plus ici]</a></div>
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
            </div>
        </div>
    )
}

export default withRouter(Details)