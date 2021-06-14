import styles from './series.module.scss';
import Section from '../Section/Section';
import { useEffect, useState } from 'react';

const Series = () => {
  
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingSeries(response.results.slice(0,5))   
    })
  }, [])

  const [topRatedSeries, setTopRatedSeries] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setTopRatedSeries(response.results.slice(0,5))
    })
  }, [])
  
  const [nowPlayingSeries, setNowPlayingSeries] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setNowPlayingSeries(response.results.slice(0,5))
      
    })
    
  }, [])
  
 


  return (
    <section className={styles.body}>

      <Section 
        title="Series que son tendencia"
        items={trendingSeries}
        type="/series/trending"
        media_type="tv"
      />

      <Section 
        title="Series con mejores críticas"
        items={topRatedSeries}
        type="/series/top-rated"
        media_type="tv"
      />
    
      <Section 
        title="Series al aire"
        items={nowPlayingSeries}
        type="/series/now-playing"
        media_type="tv"
      />

    </section>
  );
}

export default Series;