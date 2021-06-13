import styles from "./runTime.module.scss";

const RunTime = ({ item }) => {

  return (
    <p className={styles.txt}>
      Duración: {item.runtime || item.episode_run_time[0]} min.
    </p>
  );
};

export default RunTime;
