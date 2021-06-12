import styles from './movies.module.scss';
import Section from '../Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Movies = () => {
  
  
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingMovies(response.results.slice(0,5))   
    })
  }, [])

  // const {movie_id} = useParams()
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setTopRatedMovies(response.results.slice(0,5))
    })
  }, [])
  
  // const {movie_id} = useParams()
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setUpcomingMovies(response.results.slice(0,5))
    })
  }, [])

  // const {movie_id} = useParams()
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setNowPlayingMovies(response.results.slice(0,5))
    })
  }, [])



  return (
    <section className={styles.body}>

      <Section 
        title="Películas que son tendencia"
        items={trendingMovies}
        type="/movies/trending"
      />

      <Section 
        title="Películas con mejores críticas"
        items={topRatedMovies}
        type="/movies/top-rated"
      />
    
      <Section 
        title="Películas a estrenarse"
        items={upcomingMovies}
        type="/movies/upcoming"
      />

      <Section 
        title="Películas en cines"
        items={nowPlayingMovies}
        type="/movies/now-playing"
      />

    </section>
  );
}

export default Movies;