import styles from './nowPlaying.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setNowPlayingMovies(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Películas en cines"/>

        <div className={styles.containerCards}>

            {nowPlayingMovies && nowPlayingMovies.map((nowPlayMovie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${nowPlayMovie.poster_path}`}
            subtitle={nowPlayMovie.title}
            key={nowPlayMovie.id}
            id={nowPlayMovie.id}
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default NowPlaying;