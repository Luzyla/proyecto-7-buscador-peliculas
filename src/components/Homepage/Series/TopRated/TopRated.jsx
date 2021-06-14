import styles from './topRated.module.scss';
import Card from '../../Section/Card/Card';
import { useEffect, useState } from 'react';
import TitleSection from '../../../TitleSection/TitleSection';


const TopRatedSeries = () => {
  const [topRatedSeries, setTopRatedSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTopRatedSeries(response.results)   
    })
  }, [])

  return (
    
    <section className={styles.container}>
      <div className={styles.containerTrending}>
        <TitleSection titleOfSection="Series con mejores críticas"/>

        <div className={styles.containerCards}>

            {topRatedSeries && topRatedSeries.map((topRateSerie) => {
            return (<Card 
            url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${topRateSerie.poster_path}`}
            subtitle={topRateSerie.name}
            key={topRateSerie.id}
            id={topRateSerie.id}
            media_type="tv"
            />)})}        
        </div>
      </div>
            
    </section>
  );
}

export default TopRatedSeries;