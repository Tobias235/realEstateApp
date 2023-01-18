import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentProperty,
  setCurrentPropertyData,
  setModalName,
  setShowDetails,
} from "../../../actions/Actions";
import useFetchProperties from "../../../hooks/useFetchProperties";
import StarRating from "../../PropertiesModal/PropertiesCommentModal/StarRating/StarRating";
import { RatingCalculator } from "../../utils/RatingCalculator";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  useFetchProperties(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json`
  );

  return (
    <>
      {Object.entries(properties).map(([key, property]) => {
        const rating = RatingCalculator(property.reviews);

        return (
          <div className={styles.properties} key={key}>
            {property.images && (
              <img src={property.images[0]} alt="Placeholder for properties" />
            )}
            <div className={styles.location}>
              <span className={styles.city}>
                {property.city}, <br />
                {property.state}
              </span>
              <StarRating
                className={styles.starRating}
                rating={rating}
                isHoverable={false}
                isClickable={false}
              />
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
                  dispatch(setCurrentPropertyData(property));
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
