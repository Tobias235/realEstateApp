import {
  setCurrentProperty,
  setCurrentPropertyData,
  setModalName,
  setShowDetails,
} from "../../../actions/Actions";
import { useDispatch } from "react-redux";
import ModalDescription from "../ModalDescription/ModalDescription";
import Button from "../../UI/Button/Button";
import styles from "./RightModal.module.scss";
import EditPropertyButton from "../EditPropertyButton/EditPropertyButton";

const RightModal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.rightModal}>
      <h1>Description</h1>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        <EditPropertyButton />
        <Button
          type="button"
          onClick={() => {
            dispatch(setShowDetails(false));
            dispatch(setCurrentPropertyData(null));
            dispatch(setCurrentProperty(null));
            dispatch(setModalName(""));
          }}
          text="Close Details"
          className={styles.closeButton}
        />
      </div>
    </div>
  );
};

export default RightModal;
