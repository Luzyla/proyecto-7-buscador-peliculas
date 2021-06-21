import styles from "./titleInfo.module.scss";

const TitleInfo = ({ title }) => {
// estas repitiendo el componente title info, porque no usar el mismo que ya tenes?

  return (
    <h4 className={styles.title}>{title}</h4>
  );
};

export default TitleInfo;
