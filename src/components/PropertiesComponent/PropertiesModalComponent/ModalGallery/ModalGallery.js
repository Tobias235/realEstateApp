import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./ModalGallery.module.scss";
import { ReactComponent as ArrowLeft } from "../../../../assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/arrowRight.svg";

const ModalGallery = () => {
  const [currentPicture, setCurrentPicture] = useState(6);

  const properties = useSelector((state) => state.properties);
  const current_property = useSelector((state) => state.current_property);

  const currentProperty = Object.entries(properties).filter(
    (property) => property[0] === current_property
  );

  const handleImageSlider = (e) => {
    const propertyImagesLength = currentProperty[0][1].images.length - 1;
    if (currentPicture === propertyImagesLength && e.target.id === "increment")
      return setCurrentPicture(0);
    if (currentPicture === 0 && e.target.id === "decrement")
      return setCurrentPicture(propertyImagesLength);

    return e.target.id === "decrement"
      ? setCurrentPicture(currentPicture - 1)
      : setCurrentPicture(currentPicture + 1);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowInnerContainer}>
          <ArrowLeft id="decrement" onClick={handleImageSlider} />
          <ArrowRight id="increment" onClick={handleImageSlider} />
        </div>
      </div>
      <img src={currentProperty[0][1].images[currentPicture]} alt="property" />
    </div>
  );
};

export default ModalGallery;
