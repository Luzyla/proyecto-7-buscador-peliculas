import styles from './homepage.module.scss'
import Section from './Section/Section'
import Details from './Details/Details'


const Homepage = () => {
  return (
    <section className={styles.body}>
      
      <Details />

      <Section 
        title="Series que son tendencia"
      />
    
    </section>
  );
}

export default Homepage;