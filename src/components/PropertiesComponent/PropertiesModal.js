import styles from "./PropertiesModal.module.scss";
import placeholder from "../../assets/images/placeholderProperties.webp";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const PropertiesModal = ({ onClose }) => {
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
    <div className={styles.modal}>
      <div className={styles.leftModal}>
        <div className={styles.gallery}>
          <ImageGallery items={images} />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.commentCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
              posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
              <span>By: Tobias</span>
            </p>
          </div>
          <div className={styles.commentCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
              posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
              <span>By: Tobias</span>
            </p>
          </div>
          <div className={styles.commentCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
              posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
              <span>By: Tobias</span>
            </p>
          </div>
        </div>
        <button className={styles.commentButton}>Add Comment</button>
      </div>
      <div className={styles.rightModal}>
        <h1>Description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
          posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
          Phasellus porttitor purus eget elit egestas, eget tincidunt mauris
          porta. Integer diam dolor, pharetra egestas porta dictum, sodales sed
          ante. Cras at cursus quam. Mauris euismod felis lectus, vel fermentum
          ex luctus lobortis. Mauris nec volutpat augue. Ut eu dapibus odio.
        </p>
        <span>Location: Pasig</span>
        <span>Bedrooms: 3</span>
        <span>Bathrooms: 2</span>
        <span>Size: 100sqm</span>
        <span>Price: 2.000.000</span>
        <div className={styles.closeButton}>
          <button type="button" onClick={onClose}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesModal;
