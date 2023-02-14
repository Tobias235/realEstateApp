import { useDispatch } from "react-redux";
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

  // const id = useSelector((state) => state.id);
  // const showEditButton = process.env.REACT_APP_ADMIN_USER === id ? true : false;

  const showEditButton = true;

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
