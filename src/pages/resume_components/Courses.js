import {Avatar, List, Typography} from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useTranslation, withTranslation, Trans } from 'react-i18next';



const Courses = () => {

    const { t, i18n } = useTranslation();

    const data = [

        {
            title: <>
                <b style={{marginRight: 15}}>2024 (ITA)</b>
                <a
                    target={'_blank'} rel={'noreferrer'}
                    style={{marginRight: 15}}
                    href="https://www.permacultura.it/index.php/en/">
                    PDC 72h - Corso di progettazione in permacultura.
                </a>
                {t( 'courses.permaculture' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2022 (EN)</b>
                <a
                    target={'_blank'} rel={'noreferrer'}
                    style={{marginRight: 15}}
                    href="https://www.udemy.com/share/101qYw3@o7UTl-1ric4aB-IyjlKUkTvKGsExbZpeDsHZcU8I92YbK0ph_spzmFlaujd0Rw_1/">
                    The Complete Web Development Bootcamp.
                </a>
                {t( 'courses.angela' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2021 (EN)</b>
                <a target={'_blank'} rel={'noreferrer'}
                   style={{marginRight: 15}}
                   href={'https://www.udemy.com/'}>
                    Photography Masterclass: A complete guide to photography.
                </a>
                {t( 'courses.photographyEbiner' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2021 (EN)</b>
                <a target={'_blank'} rel={'noreferrer'}
                   style={{marginRight: 15}}
                   href={'https://www.udemy.com/'}>
                    Video Storytelling. Creative Excellence Class.
                </a>
                {t( 'courses.videoStorytelling' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2019 (ES)</b>

                <a target={'_blank'} rel={'noreferrer'}
                   style={{marginRight: 15}}
                   href={'https://www.laampliadora.org/portfolio/curso-iluminacion/'}>
                    El Sol en nuestras manos: curso de fotografia para aprender a controlar la luz.
                </a>
                {t( 'courses.ampliadora' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2018 (ES)</b>
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15}}
                   href={'https://www.laampliadora.org/portfolio/manejo-de-camara/'}>
                    Pásate al modo manual: curso de fotografia para el manejo de cámara.
                </a>
                {t( 'courses.ampliadora' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2018 (EN)</b>
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15}}
                   href={'https://www.britishcouncil.it/esami/ielts'}>
                    IELTS English language Academic Certificate.
                </a>
                {t( 'courses.ielts' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2017 (ITA)</b>
                {t( 'courses.beFilmaker' )}
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15, marginLeft: 15}}
                   href={'https://www.befilmaker.com/'}>
                    Associazione Nazionale Filmmakers Italiani
                </a>
                (Roma)
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2015 (ITA)</b>
                {t( 'courses.genius' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2014 (EN)</b>
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15}}
                   href={'https://www.britishcouncil.it/esami/ielts'}>
                    IELTS English language Academic Certificate.
                </a>
                {t( 'courses.ielts2' )}
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2013 (FR)</b>
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15}}
                   href={'https://www.institutfrancais.it/italia/le-certificazioni-delf-dalf'}>
                    DELF French language certificate
                </a>
                (B2)
            </>,
        },
        {
            title: <>
                <b style={{marginRight: 15}}>2012 (EN)</b>
                <a target={'_blank'} rel={'noreferrer'} style={{marginRight: 15}}
                   href={'https://www.cambridgeenglish.org/exams-and-tests/first/'}>
                    Cambridge English: First (FCE) English language certificate
                </a>
                (B2)
            </>,
        },
    ];

    return  <div style={{marginTop: '6em', padding: '2em'}} className={'inverse-section'}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'courses.coursesTitle' )}</Typography.Title>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<CheckOutlined style={{color: 'white'}}/>}
                        title={item.title}
                        description=""
                    />
                </List.Item>
            )}
        />
    </div>
}

export default Courses;