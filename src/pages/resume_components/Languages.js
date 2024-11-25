import {Card, Typography, Row, Col, Rate} from "antd";
import { useTranslation, withTranslation, Trans } from 'react-i18next';




const Languages = () => {

    const { t, i18n } = useTranslation();

    const my_languages = [
        {
            name: t( 'languages.it' ),
            rate: 5
        },
        {
            name: t( 'languages.en' ),
            rate: 5
        },
        {
            name: t( 'languages.es' ),
            rate: 3
        },
        {
            name: t( 'languages.fr' ),
            rate: 2
        }
    ]

    return <div style={{marginTop: '6em'}}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'languages.languagesTitle' )}</Typography.Title>

        <Row gutter={16}>
            {my_languages.map((skill, index) =>
                <Col xs={24} lg={6} key={`card-${index}`}>
                    <Card title={skill.name} style={{background: '#587546'}} bordered={false}>
                        <Rate value={skill.rate}/>
                    </Card>
                </Col>
            )}
        </Row>
    </div>
}

export default Languages;