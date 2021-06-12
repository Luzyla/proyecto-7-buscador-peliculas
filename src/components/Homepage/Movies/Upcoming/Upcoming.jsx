import styles from './upcoming.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
        setUpcomingMovies(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Películas a estrenarse"/>

        <div className={styles.containerCards}>

            {upcomingMovies && upcomingMovies.map((upcomingMovie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${upcomingMovie.poster_path}`}
            subtitle={upcomingMovie.title}
            key={upcomingMovie.id}
            id={upcomingMovie.id}
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default Upcoming;