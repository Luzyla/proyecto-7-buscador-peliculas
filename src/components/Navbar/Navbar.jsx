import styles from "./navbar.module.scss";
import { RiHome3Line } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";
import { RiTvLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.containerIcons}>
        <NavLink to="/" exact activeClassName={styles.iconActive}>
          <RiHome3Line className={styles.icon} />
        </NavLink>

        <NavLink to="/movies" exact activeClassName={styles.iconActive}>
          <RiMovie2Line className={styles.icon} />
        </NavLink>

        <NavLink to="/series" exact activeClassName={styles.iconActive}>
          <RiTvLine className={styles.icon} />
        </NavLink>
      </div>
      <div className={styles.containerSearch}>
        <RiSearchLine
          className={styles.icon}
        />
        <input
          type="text"
          name="search"
          placeholder="Búsqueda..."
          className={styles.search}
        />
      </div>
    </div>
  );
};

export default Navbar;
