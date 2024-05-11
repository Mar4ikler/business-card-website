import InfoBox from "../InfoBox/InfoBox";
import styles from './InfoBoxesContainer.module.css';

const InfoBoxesContainer = () => {
    return (
        <div className={styles.subInfoContainer}>
            <InfoBox
                header={'+7 499 173 09 09'}
                text={
                    '«Московская служба психологической помощи населению» Департамента социальной защиты населения г. Москвы'
                }
            />
            <InfoBox
                header={'+7 499 791 20 50'}
                text={'Экстренная медико-психологическая помощь в кризисных ситуациях'}
            />
            <InfoBox
                header={'+7 499 216 50 50'}
                text={'«Телефон доверия» экстренной психологической помощи'}
            />
            <InfoBox
                header={'+7 499 901 02 01'}
                text={'Независимый благотворительный центр помощи пережившим сексуальное насилие'}
            />
            <InfoBox header={'+7 800 100 01 91'} text={'Круглосуточная поддержка онкобольных'} />
            <InfoBox
                header={'+7 800 2000 122'}
                text={'Телефон доверия для детей, подростков и их родителей'}
            />
        </div>
    );
};

export default InfoBoxesContainer;
