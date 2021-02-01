import React from 'react'
import 'antd/dist/antd.css'
import styles from '../../styles/Home.module.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, Descriptions, Image, Layout, Typography, Avatar, Card, BackTop, Row, Col } from 'antd'
import { HeartTwoTone, InstagramOutlined, TwitterOutlined, FolderOpenOutlined, HomeFilled, FireTwoTone } from '@ant-design/icons'
import moment from 'moment'

function Details({ router: { query } }) {

    const photo = JSON.parse(query.object)
    console.log(photo)

    const { Footer } = Layout
    const { Title } = Typography
    const renderBio = () => {
        if (photo.user.bio === null || photo.user.bio === undefined) {
            return <></>
        } else {
            return <div style={{ fontStyle: 'italic', marginTop: '2%', textAlign: 'center' }}>" {photo.user.bio} "</div>
        }
    }
    const instagramLink = () => {
        if (photo.user.instagram_username === null || photo.user.instagram_username === undefined) {
            return <></>
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <div style={{ textDecoration: 'underline' }}>Usefull links :</div>
                    <a href={`https://www.instagram.com/${photo.user.instagram_username}/`}><InstagramOutlined /> {photo.user.instagram_username}</a>
                </div>
            )
        }
    }
    const twitterLink = () => {
        if (photo.user.twitter_username === null || photo.user.twitter_username === undefined) {
            return <></>
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <a href={`https://www.twitter.com/${photo.user.twitter_username}/`}><TwitterOutlined /> {photo.user.twitter_username}</a>
                </div>
            )
        }
    }
    const portfolioLink = () => {
        if (photo.user.portfolio_url === null || photo.user.portfolio_url === undefined) {
            return <></>
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <a href={photo.user.portfolio_url}><FolderOpenOutlined /> portfolio</a>
                </div>
            )
        }
    }
    const interesstingNumbers = () => {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{ textDecoration: 'underline' }}>Interessting Numbers :</div>
                    Number of collections : {photo.user.total_collection || 0}
                <br />
                    Number of total likes : {photo.user.total_likes || 0}
                <br />
                    Number of posted photos : {photo.user.total_photos || 0}
                <br />
            </div>
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
            <div className="site-page-header-ghost-wrapper">
                <Title level={2} underline={true} className={styles.title} style={{ textAlign: 'center', textTransform: 'capitalize' }}>{photo.alt_description}</Title>
                <Descriptions size="small" column={1}>
                    <Descriptions.Item id="imageArticle">
                        <Image src={photo.links.download} alt={photo.alt_description} width={"100%"}
                            placeholder={
                                <Image
                                    preview={false}
                                    src={photo.links.download}
                                />
                            } />
                    </Descriptions.Item>
                    <Descriptions.Item>
                        <div style={{ fontWeight: 'bold', float: 'left', width: '50%' }}>{photo.likes} <HeartTwoTone twoToneColor="#FF4033" /></div>
                        <div style={{ fontSize: '1.2em', fontStyle: 'italic', float: 'left', textAlign: 'right', width: '50%' }}>Shot taken {moment(photo.user.updated_at).format("MMMM-Do-YYYY")}</div>
                    </Descriptions.Item >
                    <Descriptions.Item>
                        <Card hoverable style={{ backgroundColor: "#f5f5f5", width: '100%' }} bodyStyle={{ padding: 0, alignSelf: 'center' }}>
                            <div style={{ fontSize: '1.2em', fontStyle: 'italic', padding: 0, display: 'flex', justifyContent: 'center' }}>
                                <Avatar size={64} src={`${photo.user.profile_image.medium}`} />
                            </div>
                            <br />
                            <div style={{ fontSize: '1.2em', fontStyle: 'italic', textAlign: 'center' }}>{photo.user.name}   {photo.user.location}</div>
                            {renderBio()}
                            <Row style={{marginTop: '2%'}}>
                                <Col span={12}>
                                    <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%' }}>
                                        {interesstingNumbers()}
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%', textAlign: 'right' }}>
                                        {instagramLink()}
                                        {twitterLink()}
                                        {portfolioLink()}
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '2%' }}>
                                <FireTwoTone twoToneColor="#e25822" /> Thank you to give all your support to this artist <FireTwoTone twoToneColor="#e25822" />
                            </div>
                        </Card>
                    </Descriptions.Item>
                </Descriptions>
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
        </div>
    )
}

export default withRouter(Details)