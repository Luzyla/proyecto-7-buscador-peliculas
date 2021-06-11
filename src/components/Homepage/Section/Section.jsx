import styles from './section.module.scss'
import Card from './Card/Card'
import { RiArrowDropRightLine } from "react-icons/ri";
import { useEffect, useState } from 'react';


const Section = ({title, items}) => {
  const [variable, setVariable] = useState(1)
  console.log("Section items", items)

  useEffect(()=>{}, [])
  
  return (
    
    <div className={styles.container}>
      
      <h2 className={styles.titleOfSection}>
        {title} 
        <RiArrowDropRightLine className={styles.icon} />
      </h2>
      <div className={styles.containerCards}>
        {items && items.map((item) => {
          return (<Card 
          url={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`}
          subtitle={item.title || item.name}
          key={item.id}
        />)})}        
        
        
      </div>
            
    </div>
  );
}

export default Section;