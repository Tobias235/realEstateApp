import { useDispatch } from "react-redux";
import { setShowDetails } from "../../../actions/Actions";
import placeholder from "../../../assets/images/placeholderProperties.webp";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const handleShowDetails = () => {
    dispatch(setShowDetails(true));
  };
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
        <button onClick={handleShowDetails}>More Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
