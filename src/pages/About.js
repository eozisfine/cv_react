import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Col, Row, Typography } from "antd";
import { Anchor } from 'antd';
import React from 'react';
import { useWindowWidth } from "@react-hook/window-size";
import { Cat } from "../components/cat";


const About = () => {

    const onlyWidth = useWindowWidth()
    const { t, i18n } = useTranslation();

    return (
        <div style={{ position: 'relative', padding: onlyWidth < 1200 ? 20 : 0 , backgroundColor: '#ffeede'}}>
            <div className="about" style={{
                paddingTop: onlyWidth < 1200 ? 0 : '10em',
                maxWidth: onlyWidth < 1200 ? 'none' : '36%', margin: 'auto', minHeight: onlyWidth < 1200 ? 0 : '75vh' }}>
                <Typography.Title level={2} style={{ margin: '2em 0'}}>{t('about.aboutTitle')}</Typography.Title>
                <p className="pAbout"
                                         dangerouslySetInnerHTML={{ __html: t( 'about.aboutDescription' ) }}/>
                <a href="/resume"><h2>↘ cv</h2></a>
            </div>
            <div style={{
                position: onlyWidth < 1200 ? "relative" : "absolute",
                left: 0,
                bottom: -100,
                width: onlyWidth < 1200 ? 240 : '24%',
                height: onlyWidth < 1200 ? 240 : '100%',
                backgroundPosition: 'bottom',
                marginTop: onlyWidth < 1200 ? '2em' : 0,
                margin: 'auto',
                overflow: 'hidden',
                //boxShadow: '0 0 0 10px #9ed2c6'
            }}>
                <img style={{ width: '100%', borderBottomRightRadius: '35%' }} src={'./images/14.png'}/>
            </div>
            <Cat/>
        </div>
    )
}

export default About;
