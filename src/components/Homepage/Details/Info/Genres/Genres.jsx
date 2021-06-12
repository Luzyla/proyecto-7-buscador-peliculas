import styles from "./genres.module.scss";

const Genres = ({ item }) => {
  console.log("item genre", item);

  return (
    
    <p className={styles.txt}>
      Géneros:
        {item.genres &&
          item.genres.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
    </p>

  );
};

export default Genres;
