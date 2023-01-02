import { useSelector } from "react-redux";
import styles from "./ModalDescription.module.scss";

const ModalDescription = () => {
  const properties = useSelector((state) => state.properties);
  const current_property = useSelector((state) => state.current_property);

  const currentProperty = Object.entries(properties).filter(
    (property) => property[0] === current_property
  );

  return (
    <div className={styles.modalDescription}>
      <p>{currentProperty[0][1].description}</p>
      <span className={styles.location}>
        Location:{" "}
        {currentProperty[0][1].city + ", " + currentProperty[0][1].state}
      </span>
      <span>Bedrooms: {currentProperty[0][1].bedrooms}</span>
      <span>Bathrooms: {currentProperty[0][1].bathrooms}</span>
      <span>Size: {currentProperty[0][1].size} sqm</span>
      <span>Price: {currentProperty[0][1].price}</span>
    </div>
  );
};

export default ModalDescription;
