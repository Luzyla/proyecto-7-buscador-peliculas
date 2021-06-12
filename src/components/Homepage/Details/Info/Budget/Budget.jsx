import styles from "./budget.module.scss";
import Divider from "../Divider/Divider";

const Budget = ({ item }) => {

  return (
    
    <p className={styles.txt}>
      Presupuesto: $ <Divider number={item.budget} />
    </p>

  );
};

export default Budget;
