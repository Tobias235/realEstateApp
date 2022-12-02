import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ModalGallery.module.scss";
import { ReactComponent as ArrowLeft } from "../../../../assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/arrowRight.svg";

const ModalGallery = () => {
  const [propertyImages, setPropertyImages] = useState();
  const [currentPicture, setCurrentPicture] = useState(0);

  const properties = useSelector((state) => state.properties);
  const current_property = useSelector((state) => state.current_property);

  const propertyImagesLength = propertyImages?.length - 1;

  useEffect(() => {
    const currentProperty = Object.entries(properties).filter(
      (property) => property[0] === current_property
    );
    setPropertyImages(currentProperty[0][1].images);
  }, [properties, current_property]);

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
      {propertyImages && (
        <img src={propertyImages[currentPicture]} alt="property" />
      )}
    </div>
  );
};

export default ModalGallery;
