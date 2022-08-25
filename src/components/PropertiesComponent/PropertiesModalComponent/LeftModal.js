import ModalGallery from "../../PropertiesComponent/PropertiesModalComponent/ModalGallery";
import ModalCommentCard from "../../PropertiesComponent/PropertiesModalComponent/PropertiesCommentModal/ModalCommentCard";
import Button from "../../utils/Button";

import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <div className={styles.commentBox}>
        <ModalCommentCard />
        <ModalCommentCard />
        <ModalCommentCard />
      </div>
      <Button
        type="button"
        text="Add Comment"
        className={styles.commentButton}
      />
    </div>
  );
};

export default LeftModal;
