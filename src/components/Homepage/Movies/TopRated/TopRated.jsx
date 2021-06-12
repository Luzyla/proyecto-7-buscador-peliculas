import styles from './topRated.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTopRatedMovies(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Películas con mejores críticas"/>

        <div className={styles.containerCards}>

            {topRatedMovies && topRatedMovies.map((topRateMovie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${topRateMovie.poster_path}`}
            subtitle={topRateMovie.title}
            key={topRateMovie.id}
            id={topRateMovie.id}
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default TopRated;