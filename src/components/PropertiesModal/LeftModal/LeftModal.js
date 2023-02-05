import ModalGallery from "../ModalGallery/ModalGallery";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import AddReviewButton from "./AddReviewButton/AddReviewButton";
import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <ReviewContainer />
      <AddReviewButton />
    </div>
  );
};

export default LeftModal;
