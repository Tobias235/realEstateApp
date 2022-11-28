import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentProperty,
  setProperties,
  setShowDetails,
} from "../../../actions/Actions";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);

  const handleShowDetails = (key) => {
    dispatch(setCurrentProperty(key));
    dispatch(setShowDetails(true));
  };

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(
        "https://realestate-c158b-default-rtdb.asia-southeast1.firebasedatabase.app/properties.json"
      );
      const data = await response.json();
      dispatch(setProperties(data));
    };
    fetchProperties().catch(console.error);
  }, [dispatch]);

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
                More Details
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PropertyCard;
