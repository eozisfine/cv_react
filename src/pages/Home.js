import { Layout, Col, Row, Button, Avatar, Card, Typography, Divider, Flex } from "antd";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import { LayoutContext } from '../layouts/LayoutContext';
import { useTranslation } from "react-i18next";
import Meta from "antd/es/card/Meta";


const Home = () => {
    const [ color, setColor ] = useState( 'white' );
    const { t, i18n } = useTranslation();

    const items = [
        {
            name: t( 'navbar.about' ), href: '/about'
        },
        {
            name: 'CV', href: '/resume'
        },
        {
            name: t( 'navbar.contactMe' ), href: '/contactme'
        },
    ].map( ( { name, href }, index ) => {
        return {
            key: href, label: `${name}`, href: href
        };
    }, );

    return <>
        <LayoutContext.Provider value={{ color, setColor }}>
            <Layout style={{ backgroundColor: 'transparent' }}>
                <Navbar items={items}/>
                <Layout.Content>
                    <div className="top-container">
                        <div className="video-container">
                            <video autoPlay muted loop className="background-video">
                                <source src="/images/homevideo.mp4" type="video/mp4"/>
                            </video>

                            <div className="overlay">
                                <Row align={'middle'} gutter={64}>
                                    <Col xs={24} lg={8}>
                                        <div className="tossing">
                                            <img src="images/logo_mio.png" alt="logo"
                                                 width="180px"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify={'center'}><Col style={{ textAlign: "center", marginTop: "40px" }}><h2
                                    style={{ fontSize: "3rem", color: "#918877" }}>{t( 'home.description' )}</h2>
                                    <h2><a target="_blank" href="/contactme">↘{t( 'navbar.contactMe' )}</a></h2>
                                </Col></Row>
                            </div>
                        </div>
                    </div>

                    <div className="middle-container">
                        <div style={{ textAlign: 'right', marginRight: 70 }}>
                            <h2 dangerouslySetInnerHTML={{__html: t('home.middle-title')}}/>
                            <p style={{ color: 'white' }} dangerouslySetInnerHTML={{__html: t('home.middle-description')}}/>
                            <h2><a target="_blank" href="/projects">↘{t( 'navbar.projects' )}</a></h2>
                            <h2><a target="_blank" href="/writing">↘{t( 'navbar.writing' )}</a></h2></div>
                    </div>

                    <div className="third-container" style={{ textAlign: 'center' }}>
                        <h2>{t( 'home.tools' )}</h2>

                        <Flex justify="space-evenly" align="center" className="centered-container2" style={{marginTop: 48, marginBottom: 32}}>
                            <div><img src="/images/webstorm.png"/></div>
                            <div><img src="/images/react.png"/></div>
                            <div><img src="/images/wordpress3.png"/></div>
                            <div><img src="/images/premiere.png"/></div>
                        </Flex>
                    </div>

                    <div className="bottom-container" style={{ textAlign: 'center' }}>
                        <h2>{t( 'home.bottom-title' )}</h2>
                        <h2><a target="_blank" href="/contactme">↘{t( 'navbar.contactMe' )}</a></h2>
                    </div>
                </Layout.Content>
            </Layout>

            <Layout.Footer style={{ background: 'rgb(255, 220, 183)', position: "relative", zIndex: 2 }}>
                <Footer/>
            </Layout.Footer>
        </LayoutContext.Provider>
    </>
}

export default Home;