import { useDispatch, useSelector } from "react-redux";
import {
  setModalName,
  setShowDetails,
  setShowUploadPropertiesModal,
} from "../../../actions/Actions";
import Button from "../../UI/Button/Button";

const EditPropertyButton = () => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.id);

  // const showEditButton = process.env.REACT_APP_ADMIN_USER === id ? true : false;
  const showEditButton = true;

  return (
    <>
      {showEditButton && (
        <Button
          type="button"
          onClick={() => {
            dispatch(setShowDetails(false));
            dispatch(setModalName("upload"));
            dispatch(setShowUploadPropertiesModal(true));
          }}
          text="Edit Property"
        />
      )}
    </>
  );
};

export default EditPropertyButton;
