import AccordionContainer from '../../components/AccordionContainer/AccordionContainer';
import InfoBoxesContainer from '../../components/InfoBoxesContainer/InfoBoxesContainer';
import { images } from '../../images/images';
import styles from './MainView.module.css';

const MainView = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.generalInfoContainer}>
                <div className={styles.representationInfo}>
                    <div>Ирина Лапина</div>
                    <div>клинический психолог, специалист EMDR / ДПДГ</div>
                </div>
                <img src={images.irina} alt="not found" />
            </div>
            <div className={styles.helpBox}>
                <div>
                    Все хотят тебе что-то предложить, но никто не спрашивает в чем ты нуждаешься,
                    верно?
                </div>
                <div>Давай поговорим об этом?</div>
            </div>
            <AccordionContainer />
            <InfoBoxesContainer />
        </div>
    );
};

export default MainView;
