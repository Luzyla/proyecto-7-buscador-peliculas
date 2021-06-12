import { Link } from 'react-router-dom';
import styles from './card.module.scss'

const Card = ({url, id, subtitle}) => {
  return (
    <Link to={`/details/${id}`} className={styles.container}>
      
      <div className={styles.containerImg}>
        <img className={styles.cardImg} src={url} alt={subtitle} />
      </div>
      <p className={styles.txtImg}>{subtitle}</p>
            
    </Link>
  );
}

export default Card;