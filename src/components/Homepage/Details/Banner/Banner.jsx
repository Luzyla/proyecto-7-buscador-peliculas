import styles from './banner.module.scss'


const Banner = ({url, title}) => {
  return (
    <div className={styles.container}>
      
        <div className={styles.containerImg}>
            <img className={styles.bannerImg} src={url} alt={title} />
        </div>

        <div className={styles.containerNavBar}>
            <h4 className={styles.navBarButtons}>INFO</h4>
            <h4 className={styles.navBarButtons}>REPARTO</h4>
            <h4 className={styles.navBarButtons}>VIDEOS</h4>
            <h4 className={styles.navBarButtons}>SIMILARES</h4>
        </div>  
            
    </div>
  );
}

export default Banner;