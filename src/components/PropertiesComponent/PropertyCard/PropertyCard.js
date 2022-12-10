import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentProperty,
  setCurrentPropertyData,
  setShowDetails,
} from "../../../actions/Actions";
import useFetchProperties from "../../../hooks/useFetchProperties";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  useFetchProperties(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json`
  );

  const handleShowDetails = (key) => {
    const currentProperty = Object.entries(properties).filter(
      (property) => property[0] === key
    );
    dispatch(setCurrentProperty(currentProperty[0][0]));
    dispatch(setCurrentPropertyData(currentProperty[0][1]));
    dispatch(setShowDetails(true));
  };

  return (
    <>
      {Object.entries(properties).map(([key, property]) => {
        return (
          <div className={styles.properties} key={key}>
            <img src={property.images[0]} alt="Placeholder for properties" />
            <div className={styles.location}>
              <span>Location: {property.location}</span>
            </div>
            <div className={styles.detailContainer}>
              <span>Bedroom: {property.bedrooms}</span>
              <span>Bathroom: {property.bathrooms}</span>
              <span>Size: {property.size} SQM</span>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={() => handleShowDetails(key)}>
                Show Details
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PropertyCard;
