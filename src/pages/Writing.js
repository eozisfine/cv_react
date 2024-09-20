import { useTranslation, withTranslation, Trans } from 'react-i18next';

const Writing = () => {

    const { t, i18n } = useTranslation();

    return <>

        <div style={{textAlign: 'center', paddingTop: '100px', paddingBottom: '100px'}}>
            <img src="images/wip.gif" alt="a gif that says work in progress" />
        </div>

        <div style={{marginBottom: 60}}></div>
    </>
}

export default Writing;