import styles from './info.module.scss';
import Card from '../../Section/Card/Card'
import { SiImdb } from 'react-icons/si';
import { RiTwitterFill } from 'react-icons/ri';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { IoIosLink } from 'react-icons/io';


const Info = ({url, title, sinopsis, stars, time, gender, budget, money, production}) => {
  return (
    <div className={styles.container}>
        
        <div className={styles.containerInfo}>
            
            <Card className={styles.cardImg}
            url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg"
            />
            
            {/* <div className={styles.containerImg}>
                <img className={styles.infoImg} src={url} alt={title} />
            </div> */}

            <div className={styles.containerTxt}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.stars}>{stars}</div>
                <p className={styles.sinopsis}>{sinopsis}</p>
                <p className={styles.txt}>Duración: {time}</p>
                <p className={styles.txt}>Géneros: {gender}</p>
                <p className={styles.txt}>Presupuesto: {budget}</p>
                <p className={styles.txt}>Recaudación: {money}</p>
                <p className={styles.txt}>Producción: {production}</p>
                <div className={styles.socialMedia}>
                    <SiImdb className={styles.icon}/>
                    <RiTwitterFill className={styles.icon}/>
                    <IoLogoFacebook className={styles.icon}/>
                    <IoLogoInstagram className={styles.icon}/>
                    <IoIosLink className={styles.icon}/>
                </div>
            </div>  
        </div>    



    </div>
  );
}

export default Info;