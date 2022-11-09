import styles from "./RightModal.module.scss";
import ModalDescription from "../ModalDescription/ModalDescription";
import Button from "../../../utils/Button/Button";

const RightModal = ({ onClose }) => {
  return (
    <div className={styles.rightModal}>
      <h1>Description</h1>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          onClick={onClose}
          text="Close Details"
          className={styles.closeButton}
        />
      </div>
    </div>
  );
};

export default RightModal;
