import styles from "./info.module.scss";
import Card from "../../Section/Card/Card";
import { SiImdb } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import Stars from "./Stars/Stars";
import TitleInfo from "./TitleInfo/TitleInfo";
import Sinopsis from "./Sinopsis/Sinopsis";
import Genres from "./Genres/Genres";
import Budget from "./Budget/Budget";
import Reveneu from "./Reveneu/Reveneu";
import RunTime from "./RunTime/RunTime";
import Production from "./Production/Production";


const Info = ({ url, item, media_type }) => {

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <Card className={styles.cardImg} url={url} media_type={media_type} />

        {item && (
          <div className={styles.containerTxt}>
            <TitleInfo title={item.title || item.name} />

            <Stars vote={item.vote_average} />

            <Sinopsis overview={item.overview} />

            <p className={styles.txt}>Temporadas: {item.number_of_seasons}</p>
            
            <p className={styles.txt}>Episodios: {item.number_of_episodes}</p>

            <RunTime item={item} />          
                                    
            <Genres item={item} />

            <Budget item={item} media_type={item.media_type}/>
            
            <Reveneu item={item} media_type={item.media_type}/>
              
            <Production item={item} />
          
            <div className={styles.socialMedia}>
              <a
                href={`https://www.imdb.com/title/${item.imdb_id}/`}
                className={styles.link}
              >
                <SiImdb className={styles.icon} />
              </a>

              <RiTwitterFill className={styles.icon} />
              <IoLogoFacebook className={styles.icon} />
              <IoLogoInstagram className={styles.icon} />

              <a href={item.homepage} className={styles.link}>
                <IoIosLink className={styles.icon} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
