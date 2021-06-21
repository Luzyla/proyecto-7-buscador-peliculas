import { Link } from 'react-router-dom';
import styles from './card.module.scss'

const Card = ({url, id, subtitle, media_type}) => {

  // busca otro nombre para esto, mas descriptivo
  let string = `/details/${id}`
  if (media_type) {
    string += `?type=${media_type}`
  }
  
  return (
    <Link to={string} className={styles.container}>
      {/* esto deberia ser un article */}
      <div className={styles.containerImg}>
        <img className={styles.cardImg} src={url} alt={subtitle} />
      </div>
      <p className={styles.txtImg}>{subtitle}</p>
            
    </Link>
  );
}

export default Card;
