import {Timeline, Typography} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const Education = () => {

    const { t, i18n } = useTranslation();

    return<div style={{marginTop: '6em'}}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'education.educationTitle' )}</Typography.Title>
        <Timeline
            className="custom-timeline"
            mode={'alternate'}>

            <Timeline.Item color={'green'}>
                {t( 'education.master' )}
            </Timeline.Item>

            <Timeline.Item color={'green'}>
                {t( 'education.bachelor' )}
            </Timeline.Item>

            <Timeline.Item color={'green'}>
                {t( 'education.highSchool' )}
            </Timeline.Item>

        </Timeline>
    </div>
}

export default Education;