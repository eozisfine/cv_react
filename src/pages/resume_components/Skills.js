import {Card, Typography, Row, Col, Rate} from "antd";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const my_skills = [
    {
        name: 'writing',
        rate: 5
    },
    {
        name: 'videomaking',
        rate: 4
    },
    {
        name: 'video editing',
        rate: 4
    },
    {
        name: 'programming',
        rate: 3
    },
    {
        name: 'photography',
        rate: 4
    },
    {
        name: 'social media',
        rate: 4
    }
]


const Skills = () => {

    const { t, i18n } = useTranslation();

    return <div style={{marginTop: '6em', padding: '2em'}} className={'inverse-section'}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'skills.skillsTitle' )}</Typography.Title>

        <Row gutter={16}>
            {my_skills.map((skill, index) =>
                <Col xs={24} lg={6} key={`card-${index}`}>
                    <Card title={t(`skills.${skill.name}`)} style={{background: '#803e73', marginTop: 25}} bordered={false}>
                        <Rate value={skill.rate}/>
                    </Card>
                </Col>
            )}
        </Row>
    </div>
}

export default Skills;