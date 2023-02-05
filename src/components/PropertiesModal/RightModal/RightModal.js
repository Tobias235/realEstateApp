import ModalDescription from "../ModalDescription/ModalDescription";
import CloseDetailsButton from "./CloseDetailsButton/CloseDetailsButton";
import styles from "./RightModal.module.scss";

const RightModal = () => {
  return (
    <div className={styles.rightModal}>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        <CloseDetailsButton />
      </div>
    </div>
  );
};

export default RightModal;
