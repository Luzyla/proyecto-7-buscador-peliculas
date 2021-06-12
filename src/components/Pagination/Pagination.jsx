import styles from './pagination.module.scss';
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Pagination = () => {
//   const [pagination, setPagination] = useState([])

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
//     .then(res => res.json())
//     .then(response => { 
//         setPagination(response.results)   
//     })
//   }, [])

  return (
    
    <div className={styles.containerPagination}>
    <FiArrowLeft className={styles.iconArrow}/>
    <FiArrowLeftCircle className={styles.iconArrow}/>
    
    <FiArrowRight className={styles.iconArrow}/>
    <FiArrowRightCircle className={styles.iconArrow}/>
    </div>

  );
}

export default Pagination;