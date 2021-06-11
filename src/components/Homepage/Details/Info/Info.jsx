import styles from './info.module.scss';
import Card from '../../Section/Card/Card'
import { SiImdb } from 'react-icons/si';
import { RiTwitterFill } from 'react-icons/ri';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { IoIosLink } from 'react-icons/io';


const Info = ({url, title, item}) => {
  return (
    <div className={styles.container}>
        
        <div className={styles.containerInfo}>
            
            <Card className={styles.cardImg}
            url={url}
            />

            {item && (<div className={styles.containerTxt}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.stars}>{item.popularity}</p>
                <p className={styles.sinopsis}>{item.overview}</p>
                <p className={styles.txt}>Duración: {item.runtime}</p>
                <p className={styles.txt}>Géneros: {item.genres.name}</p>
                <p className={styles.txt}>Presupuesto: ${item.budget}</p>
                <p className={styles.txt}>Recaudación: ${item.revenue}</p>
                <p className={styles.txt}>Producción: {item.production_companies.name}</p>
                <div className={styles.socialMedia}>
                    <SiImdb className={styles.icon}/>
                    <RiTwitterFill className={styles.icon}/>
                    <IoLogoFacebook className={styles.icon}/>
                    <IoLogoInstagram className={styles.icon}/>
                    <IoIosLink className={styles.icon}/>
                </div>
            </div>)}  
        </div>    



    </div>
  );
}

export default Info;