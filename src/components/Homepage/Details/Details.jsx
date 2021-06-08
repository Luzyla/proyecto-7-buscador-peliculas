import styles from './details.module.scss'
import Banner from './Banner/Banner'
import Info from './Info/Info'

const Details = () => {
  return (
    <section className={styles.container}>
      
      <Banner 
        url="https://www.gratistodo.com/wp-content/uploads/2021/05/wallpapers-cruella-2021-disney.jpg"
        title="Cruella"
      />

      <Info
        url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg"
        title="Cruella"
        sinopsis="Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 "
        stars= "* * * * *"
        time= "2 horas"
        gender= "Comedia"
        budget= "2.000.000"
        money= "4.000.000"
        production= "Monsters Inc."
      />

    

            
    </section>
  );
}

export default Details;