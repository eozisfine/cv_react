
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { useWindowWidth } from "@react-hook/window-size";

const ContactMe = () => {

    const onlyWidth = useWindowWidth()

    const { t, i18n } = useTranslation();

    return <>

        <div className="contact-me" style={{textAlign: 'center'}}>

            <div className="contact-me" style={{fontSize: '19px'}}><img className="contact-me-img" src="images/logo_foglia.png" alt="contact-me" width="80px"/>
                <h2>{t('contactMe.contactMeTitle')}</h2>
                <h3>{t('contactMe.contactMeSubtitle')}</h3>
                <p className="contact-message">{t('contactMe.contactMeDescription')}</p>
                <br/>
                <p><h3><img src='images/004-mail.png'/> zoerg[at]outlook.it</h3></p>
            </div>
        </div>

        <div style={{marginBottom: 60}}></div>
    </>
}

export default ContactMe;