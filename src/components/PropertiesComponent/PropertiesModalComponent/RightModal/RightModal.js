import { setShowDetails } from "../../../../actions/Actions";
import { useDispatch } from "react-redux";
import ModalDescription from "../ModalDescription/ModalDescription";
import Button from "../../../utils/Button/Button";
import styles from "./RightModal.module.scss";

const RightModal = () => {
  const dispatch = useDispatch();

  const handleCloseDetails = () => {
    dispatch(setShowDetails(false));
  };

  return (
    <div className={styles.rightModal}>
      <h1>Description</h1>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          onClick={handleCloseDetails}
          text="Close Details"
          className={styles.closeButton}
        />
      </div>
    </div>
  );
};

export default RightModal;
