import styles from "./PropertyCard.module.scss";
import placeholder from "../../../assets/images/placeholderProperties.webp";

const PropertyCard = ({ onShowDetails }) => {
  return (
    <div className={styles.properties}>
      <img src={placeholder} alt="Placeholder for properties" />
      <h1>Metro Manila</h1>
      <div className={styles.location}>
        <span>Location: Pasig</span>
      </div>
      <div className={styles.detailContainer}>
        <span>Bedroom: 3</span>
        <span>Bathroom: 2</span>
        <span>sqm: 100</span>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={onShowDetails}>More Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
