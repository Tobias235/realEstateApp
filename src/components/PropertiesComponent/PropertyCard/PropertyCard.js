import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentProperty,
  setCurrentPropertyData,
  setModalName,
  setShowDetails,
} from "../../../actions/Actions";
import useFetchProperties from "../../../hooks/useFetchProperties";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const currentPropertyKey = useSelector((state) => state.current_property);
  useFetchProperties(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json`
  );

  useEffect(() => {
    if (currentPropertyKey) {
      const property = Object.entries(properties).filter(
        (property) => property[0] === currentPropertyKey
      );
      dispatch(setCurrentPropertyData(property[0][1]));
    }
  }, [properties, currentPropertyKey, dispatch]);

  return (
    <>
      {Object.entries(properties).map(([key, property]) => {
        return (
          <div className={styles.properties} key={key}>
            {property.images && (
              <img src={property.images[0]} alt="Placeholder for properties" />
            )}
            <div className={styles.location}>
              <span>Location: {property.city + ", " + property.state}</span>
            </div>
            <div className={styles.detailContainer}>
              <span>Bedroom: {property.bedrooms}</span>
              <span>Bathroom: {property.bathrooms}</span>
              <span>Size: {property.size} SQM</span>
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => {
                  dispatch(setCurrentProperty(key));
                  dispatch(setShowDetails(true));
                  dispatch(setModalName("details"));
                }}
              >
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
