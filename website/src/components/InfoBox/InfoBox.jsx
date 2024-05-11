import styles from './InfoBox.module.css';

const InfoBox = ({ header, text }) => {
    return (
        <div className={styles.infoContainer}>
            <div>{header}</div>
            <div>{text}</div>
        </div>
    );
};

export default InfoBox;
