import styles from './trending.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
        setTrendingMovies(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Películas que son tendencia"/>

        <div className={styles.containerCards}>
        {/* trendingMovies siempre va a ser truthy ya que lo inicias como un array vacio
        quiza estes pensando en trendingMovies.length? */}
            {trendingMovies && trendingMovies.map((trendMovie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${trendMovie.poster_path}`}
            subtitle={trendMovie.title}
            key={trendMovie.id}
            id={trendMovie.id}
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default Trending;
