import styles from './section.module.scss'
import Card from './Card/Card'
import { RiArrowDropRightLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Section = ({title, items, type}) => {
  const [variable, setVariable] = useState()

  useEffect(()=>{}, [])
  
  return (
    
    <div className={styles.container}>
      
      <Link to={`${type}`}>
        <h2 className={styles.titleOfSection}>
          {title} <RiArrowDropRightLine className={styles.icon} />
        </h2>
      </Link>

      <div className={styles.containerCards}>
        {items && items.map((item) => {
          return (<Card 
          url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`}
          subtitle={item.title || item.name}
          key={item.id}
          id={item.id}
        />)})}        
      </div>
            
    </div>
  );
}

export default Section;