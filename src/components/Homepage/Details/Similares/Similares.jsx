import styles from "./similares.module.scss";
import Card from "../../Section/Card/Card";
import { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";

const Similares = () => {
  // Reparto y Similares son componentes muuuy parecidos
  const [similar, setSimilar] = useState();
  const {id} = useParams()
  const { search } = useLocation()

  useEffect(() => {

    let typeString="movie"

    if (search) {
      const [mediaType] = search.split("=").reverse()
      typeString = mediaType
    }

    fetch(
      `https://api.themoviedb.org/3/${typeString}/${id}/similar?api_key=986cb57c124ba1dd4bd40f4efe74ae25`
    )
      .then((res) => res.json())
      .then((response) => {
        setSimilar(response.results);
      });
  }, []);

  return (
    <div className={styles.containerSimil}>
      {similar &&
        similar.map((movie) => {
          return (
            <div className={styles.containerSimilCards} key={movie.id}>
                <Card
                // aca no le pasas id a Card, asi que la url del link es undefined!!
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
                subtitle={movie.title || movie.name}
                />
            </div>
          );
        })}
    </div>
  );
};

export default Similares;
