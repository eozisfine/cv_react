import { Avatar, Card, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { useWindowWidth } from "@react-hook/window-size";

const CardSection = () => {
    const onlyWidth = useWindowWidth()
    const { t, i18n } = useTranslation();

    return <>
        {onlyWidth <= 1200 ?
            <div style={{textAlign: 'center', marginBottom: -150, zIndex: 9, position: 'relative'}}>
            <Avatar
                style={{
                    filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25))',
                    width: 250,
                    height: 250
            }}
                src="images/14.png"/>
            </div>
                :
            null
        }
        <Card
            bordered={false}
            style={{
                zIndex: 8,
                maxWidth: 1200,
                margin: 'auto',
                paddingTop: onlyWidth <= 1200 ? 150: 0,
                borderRadius: 15,
                background: '#587546',
            }}
        >
            <Meta
                avatar={onlyWidth > 1200 ? <Avatar
                    style={{ width: 250, height: 250 }}
                    src="images/14.png"/> : null}
                title="Zoe Roversi Giusti"
                description={
                    <>
                        <Typography.Title level={5} style={{
                            color: 'white',
                            fontSize: '1.4rem'
                        }}>{t( 'cardSection.cardTitle' )}</Typography.Title>
                        <Typography.Paragraph style={{ color: 'white' }}>
                            {t( 'cardSection.cardP1' )}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{ color: 'white' }}>
                            {t( 'cardSection.cardP2' )}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{ color: 'white' }}>
                            {t( 'cardSection.cardP3' )}
                        </Typography.Paragraph>
                        <div style={{
                            paddingBottom: 10
                        }}><a className="btn" href="./CV 2024 ITA.pdf" target={"_blank"}>cv ita</a>
                            <a className="btn" href="./CV 2024 EN.pdf" target={"_blank"}>cv en</a>
                        </div>
                    </>
                }
            />
        </Card>

    </>
}

export default CardSection;