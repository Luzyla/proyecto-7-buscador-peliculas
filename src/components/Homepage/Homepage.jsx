import styles from './homepage.module.scss'
import Section from './Section/Section'


const Homepage = () => {
  return (
    <section className={styles.body}>
      
      <Section 
        title="Películas que son tendencia"
      />
      
      <Section 
        title="Series que son tendencia"
      />
    
    </section>
  );
}

export default Homepage;