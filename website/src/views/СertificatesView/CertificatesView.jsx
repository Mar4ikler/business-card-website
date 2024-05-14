import { Carousel } from 'react-bootstrap';
import { images } from '../../images/images';
import styles from './CertificatesView.module.css'

const CertificatesView = () => {
    return (
        <Carousel variant='dark' className={styles.carouselContainer} slide={false} interval={null}>
            <Carousel.Item>
                <img src={images.diplom} className={styles.imageContainer} alt="not found" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={images.onlineDiplom} className={styles.imageContainer} alt="not found" />
            </Carousel.Item>
        </Carousel>
    );
};

export default CertificatesView;
