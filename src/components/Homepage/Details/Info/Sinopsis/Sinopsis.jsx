import styles from "./sinopsis.module.scss";

const Sinopsis = ({ overview }) => {

  return (
    <p className={styles.sinopsis}>{overview}</p>
  );
};

export default Sinopsis;
