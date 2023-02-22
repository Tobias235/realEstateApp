import { useDispatch, useSelector } from "react-redux";
import {
  setModalName,
  setShowUploadPropertiesModal,
} from "../../../../actions/ModalActions";
import {
  setCurrentProperty,
  setCurrentPropertyData,
} from "../../../../actions/PropertyActions";
import Button from "../../../UI/Button/Button";
import styles from "./EditPropertyButton.module.scss";

const EditPropertyButton = (props) => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.userReducer.id);

  const showEditButton = id === props.uid ? true : false;

  return (
    <>
      {showEditButton && (
        <Button
          type="button"
          text="Edit Property"
          className={styles.editPropertyButton}
          onClick={() => {
            dispatch(setModalName("upload"));
            dispatch(setShowUploadPropertiesModal(true));
            dispatch(setCurrentPropertyData(props.property));
            dispatch(setCurrentProperty(props.keyProp));
          }}
        />
      )}
    </>
  );
};

export default EditPropertyButton;
