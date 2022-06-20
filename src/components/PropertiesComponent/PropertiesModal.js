import styles from "./PropertiesModal.module.scss";
import placeholder from "../../assets/images/placeholderProperties.webp";
import "react-bnb-gallery/dist/style.css";
import ReactBnbGallery from "react-bnb-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const PropertiesModal = () => {
  const PHOTOS = [placeholder, placeholder, placeholder, placeholder];

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.leftModal}>
          <div className={styles.gallery}>
            <ImageGallery items={images} />
          </div>
          {/* <img src={placeholder} alt="random text" /> */}
          <span>Location: Pasig</span>
          <span>Bedrooms: 3</span>
          <span>Bathrooms: 2</span>
          <span>Size: 100sqm</span>
          <span>Price: 2.000.000</span>
        </div>
        <div className={styles.rightModal}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
            posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
            Phasellus porttitor purus eget elit egestas, eget tincidunt mauris
            porta. Integer diam dolor, pharetra egestas porta dictum, sodales
            sed ante. Cras at cursus quam. Mauris euismod felis lectus, vel
            fermentum ex luctus lobortis. Mauris nec volutpat augue. Ut eu
            dapibus odio.
          </p>
          <div className={styles.closeButton}>
            <button>Close Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesModal;
