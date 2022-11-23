import PropertiesFilter from "../../components/PropertiesComponent/PropertiesFilter/PropertiesFilter";
import PropertyCard from "../../components/PropertiesComponent/PropertyCard/PropertyCard";

import styles from "./PropertiesContainer.module.scss";

const PropertiesContainer = () => {
  return (
    <div id="properties" className={styles.properties}>
      <h1 className={styles.propertyHeader}>Our Properties</h1>
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
