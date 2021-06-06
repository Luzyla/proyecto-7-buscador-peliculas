import styles from './navbar.module.scss'
import { RiHome3Line } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";
import { RiTvLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";



const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.containerIcons}>
        <RiHome3Line className={styles.icon}/>
        <RiMovie2Line className={styles.icon}/>
        <RiTvLine className={styles.icon}/>
      </div>
      <div className={styles.containerSearch}>
        <RiSearchLine className={styles.icon}/>
        <input type="text" name="search" placeholder="Búsqueda..." className={styles.search} />
      </div>
    </div>
  );
}

export default Navbar;