import { useSelector } from "react-redux";
import { ReactComponent as BedIcon } from "../../../assets/images/bedIcon.svg";
import { ReactComponent as ShowerIcon } from "../../../assets/images/showerIcon.svg";
import { ReactComponent as HouseSize } from "../../../assets/images/houseSize.svg";
import styles from "./ModalDescription.module.scss";

const ModalDescription = () => {
  const current_property_data = useSelector(
    (state) => state.propertyReducer.current_property_data
  );

  return (
    <div className={styles.modalDescription}>
      <span className={styles.location}>
        {current_property_data.city + ", " + current_property_data.state}
      </span>
      <div className={styles.details}>
        <BedIcon />
        <ShowerIcon />
        <HouseSize />
      </div>
      <div className={styles.details}>
        <span>Bedrooms: {current_property_data.bedrooms}</span>
        <span>Bathrooms: {current_property_data.bathrooms}</span>
        <span>Size: {current_property_data.size} sqm</span>
      </div>

      <span>Price: ₱{current_property_data.price}</span>

      <p className={styles.description}>{current_property_data.description}</p>
    </div>
  );
};

export default ModalDescription;
