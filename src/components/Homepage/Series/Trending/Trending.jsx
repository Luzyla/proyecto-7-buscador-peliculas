import styles from './trending.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const TrendingSeries = () => {
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
        setTrendingSeries(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Películas que son tendencia"/>

        <div className={styles.containerCards}>

            {trendingSeries && trendingSeries.map((trendSerie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${trendSerie.poster_path}`}
            subtitle={trendSerie.name}
            key={trendSerie.id}
            id={trendSerie.id}
            media_type="tv"
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default TrendingSeries;