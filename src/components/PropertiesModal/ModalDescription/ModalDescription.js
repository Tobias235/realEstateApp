import { useSelector } from "react-redux";
import { ReactComponent as BedIcon } from "../../../assets/images/bedIcon.svg";
import { ReactComponent as ShowerIcon } from "../../../assets/images/showerIcon.svg";
import { ReactComponent as HouseSize } from "../../../assets/images/houseSize.svg";
import styles from "./ModalDescription.module.scss";

const ModalDescription = () => {
  const properties = useSelector((state) => state.properties);
  const current_property = useSelector((state) => state.current_property);

  const currentProperty = Object.entries(properties).filter(
    (property) => property[0] === current_property
  );

  return (
    <div className={styles.modalDescription}>
      <span className={styles.location}>
        {currentProperty[0][1].city + ", " + currentProperty[0][1].state}
      </span>
      <div className={styles.details}>
        <BedIcon />
        <ShowerIcon />
        <HouseSize />
      </div>
      <div className={styles.details}>
        <span>Bedrooms: {currentProperty[0][1].bedrooms}</span>
        <span>Bathrooms: {currentProperty[0][1].bathrooms}</span>
        <span>Size: {currentProperty[0][1].size} sqm</span>
      </div>

      <span>Price: ₱{currentProperty[0][1].price}</span>

      <p className={styles.description}>{currentProperty[0][1].description}</p>
    </div>
  );
};

export default ModalDescription;
