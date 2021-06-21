import styles from './homepage.module.scss'
import Section from './Section/Section'
import { useEffect, useState } from 'react'

const Homepage = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([])

  // esto deberia ser un hook custom, para no repetir
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingMovies(response.results.slice(0,5))   
    })
  }, [])

  // todos los estados deben estar al comienzo del componente
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingSeries(response.results.slice(0,5))   
    })
  }, [])

  return (
    
    <section className={styles.body}> 
    {/* esto no es el body, sino una seccion: mejora el nombre de la clase */}
      
      {/* si esto es una "seccion", no deberian tener la etiqueta section dentro?
      si no son secciones, mejoremos el nombre para que sea mas descriptivo */}
        <Section 
          title="Películas que son tendencia"
          items={trendingMovies}
          type="/movies/trending"
          media_type="movie"
        />

        <Section 
          title="Series que son tendencia"
          items={trendingSeries}
          type="/series/trending"
          media_type="tv"
        />
      

    </section>
  );
}

export default Homepage;
