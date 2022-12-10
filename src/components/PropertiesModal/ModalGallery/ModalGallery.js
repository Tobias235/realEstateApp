import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ModalGallery.module.scss";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrowRight.svg";

const ModalGallery = () => {
  const [currentPicture, setCurrentPicture] = useState(0);

  const currentProperty = useSelector((state) => state.current_property_data);
  const propertyImagesLength = currentProperty.length - 1;

  const handleIncrement = (e) => {
    if (
      currentPicture === propertyImagesLength &&
      e.target.id === "increment"
    ) {
      return setCurrentPicture(0);
    }
    setCurrentPicture(currentPicture + 1);
  };

  const handleDecrement = (e) => {
    if (currentPicture === 0 && e.target.id === "decrement") {
      return setCurrentPicture(propertyImagesLength);
    }

    return setCurrentPicture(currentPicture - 1);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowInnerContainer}>
          <ArrowLeft id="decrement" onClick={handleDecrement} />
          <ArrowRight id="increment" onClick={handleIncrement} />
        </div>
      </div>
      {currentProperty.images && (
        <img src={currentProperty.images[currentPicture]} alt="property" />
      )}
    </div>
  );
};

export default ModalGallery;
