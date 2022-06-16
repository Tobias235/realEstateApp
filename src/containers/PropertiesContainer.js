import PropertiesFilter from "../components/PropertiesComponent/PropertiesFilter";
import PropertyCard from "../components/PropertiesComponent/PropertyCard";
import styles from "./PropertiesContainer.module.scss";

const PropertiesContainer = () => {
  return (
    <div className={styles.properties}>
      <h1>Our Properties</h1>
      <PropertiesFilter />
      <div className={styles.grid}>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default PropertiesContainer;
