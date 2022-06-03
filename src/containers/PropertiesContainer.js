import PropertiesAvailable from "../components/PropertiesComponent/PropertiesAvailable";
import styles from "./PropertiesContainer.module.scss";

const PropertiesContainer = () => {
  return (
    <div className={styles.properties}>
      <h1>Our Properties</h1>
      <div className={styles.grid}>
        <PropertiesAvailable />
        <PropertiesAvailable />
        <PropertiesAvailable />
        <PropertiesAvailable />
        <PropertiesAvailable />
        <PropertiesAvailable />
      </div>
    </div>
  );
};

export default PropertiesContainer;
