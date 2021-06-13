import styles from "./production.module.scss";

const Production = ({ item }) => {
  return (
    
    <p className={styles.txt}>
      Producción:
      {item.production_companies &&
        item.production_companies.map((company) => (
          <span className={styles.txtCompany} key={company.id}> {company.name} </span>
        ))}
    </p>
  );
};

export default Production;
