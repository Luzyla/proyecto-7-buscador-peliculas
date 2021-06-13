import styles from "./videos.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FiYoutube } from "react-icons/fi";

const Videos = () => {
  const [videos, setVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=986cb57c124ba1dd4bd40f4efe74ae25`
    )
      .then((res) => res.json())
      .then((response) => {
        setVideos(response.results);
      });
  }, []);

  return (
    <div className={styles.containerCast}>
      {videos &&
        videos.map((video) => {
          return (
            <div className={styles.containerList} key={video.id}>
                
                <a href={`/${video.id}`}>
                <FiYoutube className={styles.iconVideo}/>
                <h5 className={styles.videoTitle}>{video.name}</h5>
                <p className={styles.videoTxt}>{video.site}</p>
                </a>
                
            </div>
          );
        })}
    </div>
  );
};

export default Videos;
