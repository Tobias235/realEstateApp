import UploadForm from "./UploadForm/UploadForm";
import ClosingIcon from "../UI/CloseIcon/ClosingIcon";
import { useDispatch } from "react-redux";
import {
  setModalName,
  setShowUploadPropertiesModal,
} from "../../actions/ModalActions";
import {
  setCurrentProperty,
  setCurrentPropertyData,
} from "../../actions/PropertyActions";
import styles from "./UploadPropertiesModal.module.scss";

const UploadPropertiesModal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.adminPropertiesModal}>
      <ClosingIcon
        onClick={() => {
          dispatch(setShowUploadPropertiesModal(false));
          dispatch(setCurrentProperty(null));
          dispatch(setCurrentPropertyData(null));
          dispatch(setModalName(""));
        }}
      />
      <h1>Add Properties</h1>
      <UploadForm />
    </div>
  );
};

export default UploadPropertiesModal;
