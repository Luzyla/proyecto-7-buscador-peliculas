import styles from "./similares.module.scss";
import Card from "../../Section/Card/Card";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const Similares = () => {
  const [similar, setSimilar] = useState();

  const {id} = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=986cb57c124ba1dd4bd40f4efe74ae25`
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
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
                subtitle={movie.title}
                />
            </div>
          );
        })}
    </div>
  );
};

export default Similares;