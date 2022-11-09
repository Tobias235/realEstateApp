import placeholder from "../../../../assets/images/placeholderProperties.webp";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import styles from "./ModalGallery.module.scss";

const ModalGallery = () => {
  const images = [
    {
      original: placeholder,
    },
    {
      original: placeholder,
    },
    {
      original: placeholder,
    },
  ];
  return (
    <div className={styles.gallery}>
      <ImageGallery items={images} />
    </div>
  );
};

export default ModalGallery;
