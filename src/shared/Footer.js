import {Col, Row} from "antd";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    return <>
        <Row>
            <Col span={12} style={{textAlign: 'center'}}>
                <p className="footer-credit-to-me">© <img src="images/logo_mio.png" width="50px"/></p>
            </Col>
            <Col span={12}  style={{textAlign: 'center'}}>
                <a className="footer-link" href="/contactme"><img className="email"
                                                                                          src="images/004-mail.png"
                                                                                          alt="email"/></a>
                <a className="footer-link" href="https://www.linkedin.com/in/zoe-roversi-giusti-6a972190/?locale=en_US"><img
                    className="lin" src="images/linkedin.png" alt="lin"/></a>
                <a className="footer-link" href="https://www.instagram.com/eozisfine/"><img className="ig"
                                                                                            src="images/003-instagram.png"
                                                                                            alt="ig"/></a>
            </Col>


        </Row>
        <p className="footer-paragraph" style={{textAlign: 'center'}}> {t('footer.description')}</p>
    </>
}
export default Footer;