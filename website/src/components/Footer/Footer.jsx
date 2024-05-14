import { images } from '../../images/images';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>Запись на консультацию через мессенджеры:</div>
            <div className={styles.imagesContainer}>
                <a
                    href="https://api.whatsapp.com/send?phone=79661251041"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={images.whatsapp} alt="not found" />
                </a>
                <a href="https://t.me/irinalapinapsycholog" target="_blank" rel="noreferrer">
                    <img src={images.tg} alt="not found" />
                </a>
            </div>
            <div className={styles.footerContactInfo}>
                <div>с 9:00 до 21:00 по МСК</div>
                <div>+7 966 125 10 41</div>
            </div>
        </div>
    );
};

export default Footer;
