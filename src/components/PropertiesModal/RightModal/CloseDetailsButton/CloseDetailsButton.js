import { useDispatch } from "react-redux";
import { setModalName, setShowDetails } from "../../../../actions/ModalActions";
import {
  setCurrentProperty,
  setCurrentPropertyData,
} from "../../../../actions/PropertyActions";
import Button from "../../../UI/Button/Button";
import styles from "./CloseDetailsButton.module.scss";

const CloseDetailsButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="button"
        text="Close Details"
        className={styles.closeDetailsButton}
        onClick={() => {
          dispatch(setShowDetails(false));
          dispatch(setCurrentPropertyData(null));
          dispatch(setCurrentProperty(null));
          dispatch(setModalName(""));
        }}
      />
    </>
  );
};

export default CloseDetailsButton;
