import styles from "./reveneu.module.scss";
import Divider from "../Divider/Divider";
// no necesita media_type
const Reveneu = ({ item, media_type }) => {
  
  return (
    <p className={styles.txt}>
      Recaudación:{" "}${" "}<Divider number={item.revenue}/>
    </p>
  );
};

export default Reveneu;
