import styles from './details.module.scss'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'


const Details = (title) => {

  const {id} = useParams()
  const [detailsMovies, setDetailsMovies] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      console.log(response)
      setDetailsMovies(response)   
    })
    
  }, [])

  

  return (
    <section className={styles.container}>
      
      {detailsMovies && (<Banner 
        url={`https://image.tmdb.org/t/p/original/${detailsMovies?.backdrop_path}`}
        title={title}
        items={setDetailsMovies}
      />)}

      {detailsMovies && (<Info
        items={setDetailsMovies}
        url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${detailsMovies?.poster_path}`}
        title={title}
        
      />)}
            
    </section>
  );
}

export default Details;