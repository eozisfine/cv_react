import {Typography} from "antd";
import { useTranslation } from "react-i18next";

const Hobbies = () => {

    const { t, i18n } = useTranslation();

    return <div style={{margin: '6em auto'}}>
        <Typography.Title level={2} style={{textAlign: 'center', marginBottom: '1.5em'}}>{t( 'hobbies.hobbiesTitle' )}</Typography.Title>
        <Typography.Paragraph style={{textAlign: 'center', fontSize: '1.3rem', margin: 'auto'}}>
            {t( 'hobbies.hobbiesDescription' )}
        </Typography.Paragraph>
    </div>
}

export default Hobbies;