import styles from './homepage.module.scss'
import Moviestendencia from './Moviestendencia/Moviestendencia'
import Seriestendencia from './Seriestendencia/Seriestendencia'


const Homepage = () => {
  return (
    <section className={styles.body}>
      
      <div className={styles.contenedor}>
          <Moviestendencia />
      </div>
      
      <div className={styles.contenedor}>
          <Seriestendencia />
      </div>

    </section>
  );
}

export default Homepage;