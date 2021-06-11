import styles from './details.module.scss'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import { Switch, useParams, Route } from 'react-router'
import { useEffect, useState } from 'react'
import Reparto from './Reparto/Reparto'
import Similares from './Similares/Similares'
import Videos from './Videos/Videos'
import Episodes from './Episodes/Episodes'


const Details = () => {

  const {id} = useParams()
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setDetails(response)   
    })
    
  }, [])

  return (
    <section className={styles.container}>
      
      {details && (<Banner 
        url={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`}
        items={details}
        id={id}
      />)}

      <Switch>
        
        <Route path="/details/reparto/:id" render={() => {
          return (
            <Reparto
              item={details}
            />
          )
        }}/>

        <Route path="/details/videos/:id" render={() => {
          return (
            <Videos
              item={details}
            />
          )
        }}/>

        <Route path="/details/similares/:id" render={() => {
          return (
            <Similares
              item={details}
            />
          )
        }}/>

        <Route path="/details/episodes/:id" render={() => {
          return (
            <Episodes
              item={details}
            />
          )
        }}/>

        <Route path="/details/:id" render={() => {
          return (
            <Info
              url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${details?.poster_path}`}
              item={details}
            />
          )
        }}/>

      </Switch>
            
    </section>
  );
}

export default Details;