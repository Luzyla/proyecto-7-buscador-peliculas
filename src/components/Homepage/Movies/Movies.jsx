import styles from './movies.module.scss'
import Section from '../Section/Section'
import { useEffect, useState } from 'react'

const Movies = () => {
  
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setPopularMovies(response.results.slice(0,5))   
    })
  }, [])

  const [reviewMovies, setReviewMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setReviewMovies(response.results.slice(0,5))   
    })
  }, [])
  
  return (
    <section className={styles.body}>

      <Section 
        title="Películas populares"
        items={popularMovies}
      />

      <Section 
        title="Películas con mejores críticas"
        items={reviewMovies}
      />
    
    </section>
  );
}

export default Movies;