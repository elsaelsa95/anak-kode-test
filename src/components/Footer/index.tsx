import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className={style.footer}>
            <div>
                <strong>{t("findUs")}</strong>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
            <div>
                <strong>{t("contactUs")}</strong>
                <div className={style.contact}>
                    <p>Email: lorem.ipsum@gmail.com</p>
                    <p>Phone: (+62)812345xxxx</p>
                </div>
            </div>
        </div>
    )
}