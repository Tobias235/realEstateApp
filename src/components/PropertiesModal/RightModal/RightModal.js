import ModalDescription from "../ModalDescription/ModalDescription";
import CloseDetailsButton from "./CloseDetailsButton/CloseDetailsButton";
import DeleteProperty from "./DeleteProperty/DeleteProperty";
import styles from "./RightModal.module.scss";

const RightModal = () => {
  return (
    <div className={styles.rightModal}>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        <DeleteProperty />
        <CloseDetailsButton />
      </div>
    </div>
  );
};

export default RightModal;
