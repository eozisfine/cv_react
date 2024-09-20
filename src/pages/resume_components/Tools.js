import {Card, Typography, Row, Col, Rate} from "antd";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const my_skills = [
    {
        name: 'visual S. Code',
        rate: 4
    },
    {
        name: 'web storm',
        rate: 4
    },
    {
        name: 'browsers',
        rate: 5
    },
    {
        name: 'windows',
        rate: 5
    },
    {
        name: 'ios',
        rate: 4
    },
    {
        name: 'g-Suite',
        rate: 4
    },
    {
        name: 'finalCutPro x',
        rate: 5
    },
    {
        name: 'premiere',
        rate: 4
    },
    {
        name: 'html',
        rate: 5
    },
    {
        name: 'css',
        rate: 5
    },
    {
        name: 'bootstrap',
        rate: 5
    },
    {
        name: 'react.js',
        rate: 4
    },
    {
        name: 'js',
        rate: 3
    },

    {
        name: 'node.js',
        rate: 3
    },
    {
        name: 'next.js',
        rate: 3
    },
    {
        name: 'unreal en. 5',
        rate: 3
    },
    {
        name: 'shopify',
        rate: 3
    },
    {
        name: 'wordpress',
        rate: 4
    },
    {
        name: 'aws',
        rate: 3
    },
    {
        name: 'ad. Illustrator',
        rate: 2
    },
    {
        name: 'ad. InDesign',
        rate: 2
    }
]


const Tools = () => {

    const { t, i18n } = useTranslation();

    return <div style={{marginTop: '6em', padding: '2em'}} className={'inverse-section'}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'tools.toolsTitle' )}</Typography.Title>

        <Row gutter={16}>
            {my_skills.map((skill, index) =>
                <Col xs={24} lg={4} key={`card-${index}`}>
                    <Card title={skill.name} style={{background: '#803e73', marginTop: 25}} bordered={false}>
                        <Rate value={skill.rate}/>
                    </Card>
                </Col>
            )}
        </Row>
    </div>
}

export default Tools;