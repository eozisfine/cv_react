import { Col, Row, Typography } from "antd";
import { Anchor } from 'antd';
import React, { Fragment } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const ProjectList = () => {

    const { t, i18n } = useTranslation();

    const renderColumn = ( content ) => {
        switch ( content?.type ) {
            case 'iframe':
                return <iframe src={content.url}
                               scrolling={'no'}
                               style={{
                                   width: '100%',
                                   maxWidth: 500,
                                   height: 400,
                                   borderRadius: 15,
                                   overflow: 'hidden'
                               }}/>
            case 'text':
                return <div
                    dangerouslySetInnerHTML={{ __html: content.text }}
                    style={{ textAlign: 'left', fontSize: '1.3rem', margin: '25px auto' }}/>

            case 'image':
                return <div
                    style={{
                        width: '100%', maxWidth: 500,
                        height: 400,
                        borderRadius: 15,
                        backgroundImage: `url(${content.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            default:
                return <>nessuna info</>
        }
    }


    const projects = [
        {
            left: {
                type: 'text',
                text: t( 'projects.permaorto' )
            },
            right: {
                type: 'image',
                url: 'images/wip3.png'
            }
        },
        {
            left: {
                type: 'image',
                url: 'images/slowtour.png',
            },
            right: {
                type: 'text',
                text: (
                    t( 'projects.tradAI' )
                )
            }
        },
        {
            left: {
                type: 'text',
                text: (
                    t( 'projects.become' )
                )
            },
            right: {
                type: 'iframe',
                url: 'https://app.become-hub.com/courses'
            }
        },
        {
            left: {
                type: 'iframe',
                url: 'https://patrizioroversi.it/',
            },
            right: {
                type: 'text',
                text: (
                    t( 'projects.patrizio' )
                )
            }

        },
        {
            left: {
                type: 'text',
                text: (
                    t( 'projects.mietta' )
                )
            },
            right: {
                type: 'iframe',
                url: 'https://miettacorli.it/',
            }
        },
        {
            right: {
                type: 'text',
                text: (
                    t( 'projects.gruppo98' )
                )
            },
            left: {
                type: 'iframe',
                url: 'https://www.youtube.com/embed/H9oANzq6G_0',
            }
        },
        {
            right: {
                type: 'iframe',
                url: 'https://eozisfine.github.io/tindog2/',
            },
            left: {
                type: 'text',
                text: (
                    t( 'projects.tindog' )
                )
            }
        },
        {
            right: {
                type: 'text',
                text: (
                    t( 'projects.loSaiChe' )
                )
            },
            left: {
                type: 'iframe',
                url: 'https://www.youtube.com/embed/2z0DE9g5BuU?si=r8t6DAtv7isj8jZf',
            }
        },
        {
            right: {
                type: 'image',
                url: 'https://www.laampliadora.org/wp-content/uploads/2019/03/tu-papa%CC%81-tambie%CC%81n-cartel.jpg',
            },
            left: {
                type: 'text',
                text: ( t( 'projects.ampliadora' )
                )
            }
        },
        {
            left: {
                type: 'iframe',
                url: 'https://www.youtube.com/embed/ao590t3d1os?si=3cwMNthXIs1Mg9xX',
            },
            right: {
                type: 'text',
                text:  t( 'projects.inViaggio' )
            }
        },
        {
            right: {
                type: 'iframe',
                url: 'https://www.youtube.com/embed/uT2CQYIXAwM?si=aK1ZXJpxGA_PIwOQ'
            },
            left: {
                type: 'text',
                text: t( 'projects.cecoli' )
            }
        },
        {
            right: {
                type: 'text',
                text: t( 'projects.nudm' )
            },
            left: {
                type: 'iframe',
                url: 'https://player.vimeo.com/video/299219976?h=361c8ec6f1'
            }
        }
    ]

    return <div>
        <Typography.Title level={2}
                          style={{ textAlign: 'center', padding: '100px 0px 0px 0px' }}>{t( 'projects.projectsTitle' )}
        </Typography.Title>

        {
            projects.map( ( project, index ) =>
                <div
                    key={'row-' + index}
                    style={{
                        backgroundColor: index % 2 === 0 ? 'transparent' : '#dfdfdf',
                        padding: '1em 0'
                    }}>
                    <Row
                        gutter={32}
                        align={'middle'}
                        style={{
                            maxWidth: 1200,
                            margin: '6em auto',
                        }}
                        justify='center'
                    >
                        <Col xs={24} lg={12} style={{ position: 'relative' }}>
                            {renderColumn( project.left )}
                        </Col>
                        <Col xs={24} lg={12} style={{ position: 'relative', }}>
                            {renderColumn( project.right )}
                        </Col>
                    </Row>
                </div>
            )
        }
    </div>
}
export default ProjectList