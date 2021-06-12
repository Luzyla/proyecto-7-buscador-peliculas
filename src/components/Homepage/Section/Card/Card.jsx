import styles from './card.module.scss'

const Card = ({url, subtitle}) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.containerImg}>
        <img className={styles.cardImg} src={url} alt={subtitle} />
      </div>
      <p className={styles.txtImg}>{subtitle}</p>
            
    </div>
  );
}

export default Card;