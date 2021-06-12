import styles from './details.module.scss'
import Banner from './Banner/Banner'
import Info from './Info/Info'
import { Switch, useParams, Route, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Reparto from './Reparto/Reparto'
import Similares from './Similares/Similares'
import Videos from './Videos/Videos'
import Episodes from './Episodes/Episodes'


const Details = () => {

  const {id} = useParams()
  const [details, setDetails] = useState()
  const { search } = useLocation()
  
  useEffect(() => {
    
    let typeString="movie"

    if (search) {
      const [mediaType] = search.split("=").reverse()
      typeString = mediaType
    }

    fetch(`https://api.themoviedb.org/3/${typeString}/${id}?api_key=986cb57c124ba1dd4bd40f4efe74ae25`)
    .then(res => res.json())
    .then(response => { 
      setDetails(response)   
    })
    
  }, [])
  console.log("LIST DETAILS", details)
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
              id={id}
            />
          )
        }}/>

        <Route path="/details/videos/:id" render={() => {
          return (
            <Videos
              item={details}
              id={id}
            />
          )
        }}/>

        <Route path="/details/similar/:id" render={() => {
          return (
            <Similares
              item={details}
              id={id}
            />
          )
        }}/>

        <Route path="/details/episodes/:id" render={() => {
          return (
            <Episodes
              item={details}
              id={id}
            />
          )
        }}/>

        <Route path="/details/:id" render={() => {
          return (
            <Info
              url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${details?.poster_path}`}
              item={details}
              id={id}
            />
          )
        }}/>

      </Switch>
            
    </section>
  );
}

export default Details;