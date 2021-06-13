import styles from "./reparto.module.scss";
import Card from "../../Section/Card/Card";
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const Reparto = () => {

  const [cast, setCast] = useState();
  const {id} = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=986cb57c124ba1dd4bd40f4efe74ae25`
    )
      .then((res) => res.json())
      .then((response) => {
        setCast(response.cast);
      });
  }, []);

  return (
    <div className={styles.containerCast}>
      {cast &&
        cast.map((person) => {
          return (
            <div className={styles.containerCastCards} key={person.id}>
                <Card
                url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${person.profile_path}`}
                subtitle={person.name}
                />
                <p className={styles.txtCharacter}>
                    {person.character}
                </p>
            </div>
          );
        })}
    </div>
  )}

export default Reparto;