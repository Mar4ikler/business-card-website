import { images } from '../../images/images';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>Запись на консультацию через мессенджеры:</div>
            <div className={styles.imagesContainer}>
                <img src={images.whatsapp} alt="not found" />
                <img src={images.tg} alt="not found" />
                <img src={images.inst} alt="not found" />
            </div>
            <div className={styles.footerContactInfo}>
                <div>с 9:00 до 21:00 по МСК</div>
                <div>+7 966 125 10 41</div>
            </div>
        </div>
    );
};

export default Footer;
