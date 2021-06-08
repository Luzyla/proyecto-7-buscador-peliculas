import styles from './section.module.scss'
import Card from './Card/Card'
import { RiArrowDropRightLine } from "react-icons/ri";


const Section = ({title}) => {
  return (
    <div className={styles.container}>
      
      <h2 className={styles.titleOfSection}>
        {title} 
        <RiArrowDropRightLine className={styles.icon} />
      </h2>
      <div className={styles.containerCards}>
        <Card 
          url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg" 
          subtitle="Harry Potter and the Deathly Hallows"
        />
        <Card 
          url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg" 
          subtitle="Harry Potter and the Deathly Hallows"
        />
        <Card 
          url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg" 
          subtitle="Harry Potter and the Deathly Hallows"
        />
        <Card 
          url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg" 
          subtitle="Harry Potter and the Deathly Hallows"
        />
        <Card 
          url="https://images-na.ssl-images-amazon.com/images/I/61aG6EicTIL._AC_SY741_.jpg" 
          subtitle="Harry Potter and the Deathly Hallows"
        />
      </div>
            
    </div>
  );
}

export default Section;