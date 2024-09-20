import { Layout, Col, Row, Button } from "antd";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import { LayoutContext } from '../layouts/LayoutContext';
import { useTranslation } from "react-i18next";

//Userò Floating per la Navbar della Home e Grow per le immagini tonde; poi è da aggiungere immagine fiori o altro in fondo




const Home = () => {
    const [ color, setColor ] = useState( 'white' );
    const { t, i18n } = useTranslation();

    const items = [
        {
            name: t('navbar.about'), href: '/about'
        },
        {
            name: 'CV', href: '/resume'
        },
        {
            name: t('navbar.contactMe'), href: '/contactme'
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


                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Layout.Content>
                        <div className="top-container">
                            <Row align={'middle'} gutter={64}>
                                <Col xs={24} lg={8}>
                                    <a href="/projects">
                                        <div className="floating home-watermelon-panel-title">
                                            <svg viewBox="0 0 100 100" width="100" height="100" id={'svg1'}>
                                                <defs>
                                                    <path id="circle"
                                                          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
                                                </defs>
                                                <text fontSize="26" letterSpacing={5}>
                                                    <textPath xlinkHref="#circle">
                                                        {t('navbar.projects')}
                                                    </textPath>
                                                </text>
                                            </svg>
                                            <img className="img-home" src="images/projects.png" style={{ maxWidth: 80 }}/>
                                        </div>
                                    </a>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <div className="tossing">
                                        <img src="images/logo_mio.png" alt="logo"
                                             width="180px"/>
                                        </div>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <a href="/writing">
                                        <div className="floating home-watermelon-panel-title">
                                            <svg viewBox="0 0 100 100" width="100" height="100"
                                                 id={'svg2'}
                                                 style={{marginLeft: 20}}>
                                                <defs>
                                                    <path id="circle"
                                                          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
                                                </defs>
                                                <text fontSize="26" letterSpacing={3}>
                                                    <textPath xlinkHref="#circle">
                                                    {t('navbar.writing')}
                                                    </textPath>
                                                </text>
                                            </svg>
                                            <img className="img-home" src="images/writing.png"  style={{maxWidth: 60}}/>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                            {//**}<div><img className="imgHome" src="images/girasoli_home2.png"/></div>**//
                                 }
                                 <Row justify={'center'}><Col style={{textAlign: "center", marginTop: "40px"}}><h2 style={{fontSize: "1rem", color: "#918877"}}>{t('home.description')}</h2></Col></Row>
                            <Row gutter={16} justify={'center'} className={'miao'}>
                               <a  className={'btn'} target="_blank" href="/projects">{t( 'navbar.projects' )}</a>
                                <a className={'btn'} target="_blank" href="/writing">{t( 'navbar.writing' )}</a>
                            </Row>
                        </div>
                    </Layout.Content>
                </Layout>

                <Layout.Footer style={{ background: '#E9DAC1', position: "relative", zIndex:2 }}>
                    <Footer/>
                </Layout.Footer>

            </Layout>
        </LayoutContext.Provider>
    </>
}

export default Home;