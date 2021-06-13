import styles from "./titleInfo.module.scss";

const TitleInfo = ({ title }) => {

  return (
    <h4 className={styles.title}>{title}</h4>
  );
};

export default TitleInfo;
