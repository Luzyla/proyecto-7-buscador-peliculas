import { Link } from 'react-router-dom';
import styles from './banner.module.scss'

const Banner = ({url, items, id}) => {

  return (
    <div className={styles.container}>
      
        <div className={styles.containerImg}>
            <img className={styles.bannerImg} src={url} alt={items.title} />
        </div>

        <div className={styles.containerNavBar}>
          
          <Link to={`/details/${id}`}>  
            <h4 className={styles.navBarButtons}>INFO</h4> 
          </Link>
          
          {/* {!items.revenue && */}
          {items.revenue === 0 &&
          <Link  to={`/details/${id}/videos`}>
            <h4 className={styles.navBarButtons}>EPISODIOS</h4>
          </Link>
          }

          <Link  to={`/details/${id}/reparto`}>
            <h4 className={styles.navBarButtons}>REPARTO</h4>
          </Link>
            {/* {items.revenue && */}
          {items.revenue !== 0 && 
          (<Link  to={`/details/${id}/videos`}>
            <h4 className={styles.navBarButtons}>VIDEOS</h4>
          </Link>)
          }
          <Link  to={`/details/${id}/similar`}>
            <h4 className={styles.navBarButtons}>SIMILARES</h4>
          </Link>  
        </div>  
            
    </div>
  );
}

export default Banner;
