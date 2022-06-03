import styles from "./PropertiesAvailable.module.scss";
import placeholder from "../../assets/images/placeholderProperties.webp";

const PropertiesAvailable = () => {
  return (
    <div className={styles.properties}>
      <img src={placeholder} alt="Placeholder for properties" />
      <div>
        <h1>Property Area</h1>
        <span>Location</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default PropertiesAvailable;
