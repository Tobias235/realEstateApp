import ModalCommentCard from "../ModalCommentCard/ModalCommentCard";
import styles from "./ReviewContainer.module.scss";

const ReviewContainer = () => {
  return (
    <div className={styles.reviewContainer}>
      <ModalCommentCard />
    </div>
  );
};

export default ReviewContainer;
