import styles from "./info.module.scss";
import Card from "../../Section/Card/Card";
import { SiImdb } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import Stars from "./Stars/Stars";
import Divider from "./Divider/Divider";

const Info = ({ url, item }) => {

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <Card className={styles.cardImg} url={url} />

        {item && (
          <div className={styles.containerTxt}>
            <h4 className={styles.title}>{item.title || item.name}</h4>

            <p className={styles.stars}>
              <Stars vote={item.vote_average} />
            </p>

            <p className={styles.sinopsis}>{item.overview}</p>
            <p className={styles.txt}>Duración: {item.runtime} min.</p>
            <p className={styles.txt}>
              Géneros:{" "}
              {item.genre && item.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
            <p className={styles.txt}>
              Presupuesto: $ <Divider number={item.budget} />
            </p>

            <p className={styles.txt}>
              Recaudación: $ <Divider number={item.revenue} />
            </p>

            <p className={styles.txt}>
              Producción:{" "}
              {item.production_companies && item.production_companies.map((company) => (
                <span key={company.id}>{company.name} | </span>
              ))}
            </p>
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
