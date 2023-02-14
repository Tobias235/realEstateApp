import ModalGallery from "../ModalGallery/ModalGallery";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <ReviewContainer />
    </div>
  );
};

export default LeftModal;
