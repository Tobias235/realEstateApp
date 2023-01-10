import {
  setCurrentProperty,
  setCurrentPropertyData,
  setModalName,
  setShowDetails,
  setShowUploadPropertiesModal,
} from "../../../actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import ModalDescription from "../ModalDescription/ModalDescription";
import Button from "../../UI/Button/Button";
import styles from "./RightModal.module.scss";

const RightModal = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.current_user_id);

  const showEditButton =
    process.env.REACT_APP_ADMIN_USER === uid ? true : false;

  return (
    <div className={styles.rightModal}>
      <h1>Description</h1>
      <ModalDescription />
      <div className={styles.buttonContainer}>
        {showEditButton && (
          <Button
            type="button"
            onClick={() => {
              dispatch(setShowDetails(false));
              dispatch(setModalName("upload"));
              dispatch(setShowUploadPropertiesModal(true));
            }}
            text="Edit Property"
            className={styles.closeButton}
          />
        )}
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
