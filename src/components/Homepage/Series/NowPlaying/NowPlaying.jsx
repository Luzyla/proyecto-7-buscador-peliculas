import styles from './nowPlaying.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const NowPlayingSeries = () => {
  const [nowPlayingSeries, setNowPlayingSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setNowPlayingSeries(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Series al aire"/>

        <div className={styles.containerCards}>

            {nowPlayingSeries && nowPlayingSeries.map((nowPlaySerie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${nowPlaySerie.poster_path}`}
            subtitle={nowPlaySerie.name}
            key={nowPlaySerie.id}
            id={nowPlaySerie.id}
            media_type="tv"
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default NowPlayingSeries;