import React from 'react'
import 'antd/dist/antd.css'
import styles from '../../styles/Home.module.css'
import { withRouter } from 'next/router'
import { Breadcrumb, Divider, Descriptions, Image, Layout, Typography, Avatar, Card, BackTop, Row, Col } from 'antd'
import { HeartTwoTone, InstagramOutlined, TwitterOutlined, FolderOpenOutlined, HomeFilled, FireTwoTone } from '@ant-design/icons'
import moment from 'moment'

function Details({ router: { query } }) {

    const photo = JSON.parse(query.object)

    const { Footer } = Layout
    const { Title } = Typography

    const renderBio = () => {
        return (
            <div style={{ fontStyle: 'italic', marginTop: '2%', textAlign: 'center' }}>" {photo.user.bio || "No bio added"} "</div>
        )
    }
    const instagramLink = () => {
        return (
            <>
                <div style={{ textDecoration: 'underline' }}>Usefull links :</div>
                <a href={(`https://www.instagram.com/${photo.user.instagram_username}/`) || 'https://www.instagram.com/'}><InstagramOutlined /> {photo.user.instagram_username || "Missing Informations"}</a>
                <br/>
            </>
        )
    }

    const twitterLink = () => {
        return (
            <>
            <a href={(`https://www.twitter.com/${photo.user.twitter_username}/`) || 'https://www.twitter.com/'}><TwitterOutlined /> {photo.user.twitter_username || "Missing Informations"}</a>
            <br/>
            </>
        )
    }
    const portfolioLink = () => {
        return (
            <>
                <a href={photo.user.portfolio_url || "/"}><FolderOpenOutlined />portfolio</a>
            </>
        )
    }

    const numberCollection = () => {
        return (
            <>
                <div style={{ textDecoration: 'underline' }}>Interessting Numbers :</div>
                Number of collections : {photo.user.total_collection || 0}
                <br />
            </>
        )
    }

    const numberLikes = () => {
        return (
            <>
                Number of total likes : {photo.user.total_likes || 0}
                <br />
            </>
        )
    }

    const numberPhotos = () => {
        return (
            <>
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
            <div className="site-page-header-ghost-wrapper">
                <Title level={2} underline={true} className={styles.title} style={{ textAlign: 'center', textTransform: 'capitalize' }}>{photo.alt_description}</Title>
                <Descriptions size="small" column={1} id="imageTab">
                    <Descriptions.Item id="imageArticle" >
                        <Row justify="center">
                            <Col span={8}>
                        <Image src={photo.links.download} alt={photo.alt_description}
                            placeholder={
                                <Image
                                    preview={false}
                                    src={photo.links.download}
                                />
                            } />
                            </Col>
                        </Row>
                    </Descriptions.Item>
                    </Descriptions>
                    <Row justify="center">
                        <Col span={8}>
                            <Descriptions size="small" column={1}>
                            
                            <Descriptions.Item>
                                <div style={{ fontWeight: 'bold', float: 'left', width: '50%' }}>{photo.likes} <HeartTwoTone twoToneColor="#FF4033" /></div>
                                <div style={{ fontSize: '1.2em', fontStyle: 'italic', float: 'left', textAlign: 'right', width: '50%' }}>Shot taken {moment(photo.user.updated_at).format("MMMM-Do-YYYY")}</div>
                            </Descriptions.Item >
                            <Descriptions.Item>
                                <Card hoverable style={{ backgroundColor: "#f5f5f5", width: '100%' }} bodyStyle={{ padding: 0, alignSelf: 'center' }}>
                                    <div style={{ fontSize: '1.2em', fontStyle: 'italic', padding: 0, display: 'flex', justifyContent: 'center' }}>
                                        <Avatar size={64} src={`${photo.user.profile_image.medium}`} style={{marginTop: "2%"}}/>
                                    </div>
                                    <br />
                                    <div style={{ fontSize: '1.2em', fontStyle: 'italic', textAlign: 'center' }}>{photo.user.name}   {photo.user.location}</div>
                                    {renderBio()}
                                    <Row style={{ marginTop: '2%' }}>
                                        <Col span={12}>
                                            <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%' }}>
                                                <div style={{ textAlign: 'center' }}>
                                                    {numberCollection()}
                                                    {numberLikes()}
                                                    {numberPhotos()}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '2%', textAlign: 'right' }}>
                                                <div style={{ textAlign: 'center' }}>
                                                    {instagramLink()}
                                                    {twitterLink()}
                                                    {portfolioLink()}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '2%' }}>
                                        <FireTwoTone twoToneColor="#e25822" /> Thank you to give all your support to this artist <FireTwoTone twoToneColor="#e25822" />
                                    </div>
                                </Card>
                            </Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <Divider />
                <Footer id="footerArticle">
                    <a
                        href="https://heroku.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/heroku.png" alt="Heroku Logo" className="logo" />
                    </a></Footer>
            </div>
        </div>
    )
}

export default withRouter(Details)