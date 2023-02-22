import { useDispatch, useSelector } from "react-redux";
import { setModalName, setShowDetails } from "../../../actions/ModalActions";
import {
  setCurrentProperty,
  setCurrentPropertyData,
} from "../../../actions/PropertyActions";
import useFetch from "../../../hooks/useFetch";

import StarRating from "../../PropertiesModal/PropertiesCommentModal/StarRating/StarRating";
import Button from "../../UI/Button/Button";
import { RatingCalculator } from "../../utils/RatingCalculator";
import EditPropertyButton from "./EditPropertyButton/EditPropertyButton";
import styles from "./PropertyCard.module.scss";

const PropertyCard = () => {
  const dispatch = useDispatch();

  const { city, type } = useSelector((state) => state.filterReducer);

  const [properties] = useFetch(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties.json`,
    city,
    type
  );

  return (
    <>
      {properties &&
        Object.entries(properties).map(([key, property]) => {
          const rating = RatingCalculator(property.reviews);
          return (
            <div className={styles.properties} key={key}>
              {property.images && (
                <img
                  src={property.images[0]}
                  alt="Placeholder for properties"
                />
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
                <Button
                  type="button"
                  text="show details"
                  onClick={() => {
                    dispatch(setCurrentProperty(key));
                    dispatch(setCurrentPropertyData(property));
                    dispatch(setShowDetails(true));
                    dispatch(setModalName("details"));
                  }}
                />
                <EditPropertyButton
                  property={property}
                  keyProp={key}
                  uid={property.uid}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PropertyCard;
