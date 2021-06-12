import styles from './titleSection.module.scss';

const TitleSection = ({titleOfSection}) => {

return (
    <h2 className={styles.titleOfSection}>
        {titleOfSection}
    </h2>
);

}

export default TitleSection;