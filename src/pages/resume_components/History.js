import {Timeline, Typography} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const History = () => {

    const { t, i18n } = useTranslation();

    return <div style={{marginTop: '6em'}}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'workExperience.workExTitle' )}</Typography.Title>
        <Timeline className="custom-timeline"
            mode={'alternate'}>

            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                {t( 'workExperience.freelance2' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.become' )}
        </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.freelance' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.Orlando2' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.Orlando1' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.loSaiChe' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.TPCmagazine' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.sessfem' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.inViaggioCon' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.astalli' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.perCaso' )}
            </Timeline.Item>

            <Timeline.Item>
                {t( 'workExperience.oxfam' )}
            </Timeline.Item>

        </Timeline>
    </div>
}

export default History;