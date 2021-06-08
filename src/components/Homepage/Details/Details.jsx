import styles from './details.module.scss'
import Banner from './Banner/Banner'

const Details = () => {
  return (
    <section className={styles.container}>
      
      <Banner 
        url="https://www.gratistodo.com/wp-content/uploads/2021/05/wallpapers-cruella-2021-disney.jpg"
        title="Cruella"
      />

            
    </section>
  );
}

export default Details;