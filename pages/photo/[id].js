import React from 'react'
import 'antd/dist/antd.css'
import styles from '../../styles/Home.module.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, Descriptions, Image, Layout, Typography, Avatar, Card, BackTop } from 'antd'
import { HeartTwoTone, InstagramOutlined, TwitterOutlined, FolderOpenOutlined, HomeFilled, FireTwoTone } from '@ant-design/icons'
import moment from 'moment'

function Details({ router: { query } }) {

    const photo = JSON.parse(query)
    console.log(photo)

    const { Footer } = Layout
    const { Title } = Typography
    const renderBio = () => {
        if (photo.user.bio === null || photo.user.bio === undefined) {
            return <></>
        } else {
            return <div style={{ fontStyle: 'italic', marginTop: '2%' }}>" {photo.user.bio} "</div>
        }
    }
    const instagramLink = () => {
        if (photo.user.instagram_username === null || photo.user.instagram_username === undefined) {
            return <></>
        } else {
            return (
                <>
                    <div style={{ textDecoration: 'underline' }}>Usefull links :</div>
                    <a href={`https://www.instagram.com/${photo.user.instagram_username}/`}><InstagramOutlined /> {photo.user.instagram_username}</a>
                </>
            )
        }
    }
    const twitterLink = () => {
        if (photo.user.twitter_username === null || photo.user.twitter_username === undefined) {
            return <></>
        } else {
            return (
                <>
                    <br />
                    <a href={`https://www.twitter.com/${photo.user.twitter_username}/`}><TwitterOutlined /> {photo.user.twitter_username}</a>
                </>
            )
        }
    }
    const portfolioLink = () => {
        if (photo.user.portfolio_url === null || photo.user.portfolio_url === undefined) {
            return <></>
        } else {
            return (
                <>
                    <br />
                    <a href={photo.user.portfolio_url}><FolderOpenOutlined /> portfolio</a>
                </>
            )
        }
    }
    const interesstingNumbers = () => {
        return (
            <>
                <div style={{ textDecoration: 'underline' }}>Interessting Numbers :</div>
                    Number of collections : {photo.user.total_collection || 0}
                <br />
                    Number of total likes : {photo.user.total_likes || 0}
                <br />
                    Number of posted photos : {photo.user.total_photos || 0}
                <br />
            </>
        )
    }

    return (
        <div className="site-card-wrapper">
            <BackTop />
            <Breadcrumb style={{ padding: "1%" }}>
                <Breadcrumb.Item> </Breadcrumb.Item>
                <Breadcrumb.Item href="/">
                    <HomeFilled />
                </Breadcrumb.Item>
            </Breadcrumb>
            {/* <div className="site-page-header-ghost-wrapper">
                <Title level={2} underline={true} className={styles.title} style={{ textAlign: 'center', textTransform: 'capitalize' }}>{photo.alt_description}</Title>
                <Descriptions size="middle" column={1}>
                    <Descriptions.Item id="imageArticle">
                        <Image src={photo.links.download} alt={photo.alt_description} width={"100%"}/>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <div style={{ fontWeight: 'bold' }}>{photo.likes} <HeartTwoTone twoToneColor="#FF4033" /></div>
                    </Descriptions.Item >
                    <div style={{ fontSize: '1.2em', fontStyle: 'italic' }}>Shot taken {moment(photo.user.updated_at).format("MMMM-Do-YYYY")}</div>
                    <Descriptions.Item>
                        <Card hoverable style={{ backgroundColor: "#f5f5f5", width: '100%' }} bodyStyle={{ padding: 0 }}>
                            <div style={{ fontSize: '1.2em', fontStyle: 'italic', padding: 0 }}>
                                <Avatar size={64} src={`${photo.user.profile_image.medium}`} style={{ marginRight: '2%' }} />{photo.user.name} - {photo.user.location}
                            </div>
                            {renderBio()}
                            <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%' }}>
                                {interesstingNumbers()}
                            </div>
                            <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%' }}>
                                {instagramLink()}
                                {twitterLink()}
                                {portfolioLink()}
                            </div>
                            <br />
                            <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
                                <FireTwoTone twoToneColor="#e25822" /> Thank you to give all your support to this artist <FireTwoTone twoToneColor="#e25822" />
                            </div>
                        </Card>
                    </Descriptions.Item>
                </Descriptions> */}
                <Divider />
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
        // </div>
    )
}

export default withRouter(Details)