import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Col, Row, Typography } from "antd";
import { Anchor } from 'antd';
import React from 'react';
import { useWindowWidth } from "@react-hook/window-size";


const About = () => {

    const onlyWidth = useWindowWidth()
    const { t, i18n } = useTranslation();

    return (
        <div style={{ position: 'relative', padding: onlyWidth < 1200 ? 20 : 0 }}>
            <div className="about" style={{
                paddingTop: onlyWidth < 1200 ? 0 : '10em',
                maxWidth: onlyWidth < 1200 ? 'none' : '36%', margin: 'auto', minHeight: onlyWidth < 1200 ? 0 : '75vh' }}>
                <Typography.Title level={2} style={{ margin: '2em 0' }}>{t('about.aboutTitle')}</Typography.Title>
                <p>
                    {t('about.aboutDescription')}
                </p>
                <a href="/resume"><h2>↘ cv</h2></a>
            </div>
            <div style={{
                position: onlyWidth < 1200 ? "relative" : "absolute",
                border:  onlyWidth < 1200 ? '10px solid #f0f2f5' : "none",
                borderRight:   onlyWidth < 1200 ? 0 : '36px solid #9ed2c6',
                left: 0,
                bottom: 0,
                width: onlyWidth < 1200 ? 240 : '24%',
                height: onlyWidth < 1200 ? 240 : '90%',
                backgroundPosition: 'bottom',
                marginTop: onlyWidth < 1200 ? '2em' : 0,
                margin: 'auto',
                borderTopLeftRadius: '80%',
                borderTopRightRadius: '80%',
                borderBottomLeftRadius: '0%',
                borderBottomRightRadius: '0%',
                overflow: 'hidden',
                //boxShadow: '0 0 0 10px #9ed2c6'
            }}>
                <img style={{ width: '100%' }}  className='animated-image' src={'./images/about5.jpg'}/>
            </div>
        </div>
    )
}

export default About;
