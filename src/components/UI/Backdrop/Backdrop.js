import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import {
  setMobileMenu,
  setShowAddComment,
  setShowDetails,
  setShowLoginModal,
  setShowMobileNavOptions,
  setShowPropertiesModal,
} from "../../../actions/Actions";
import styles from "./Backdrop.module.scss";

const Backdrop = () => {
  const dispatch = useDispatch();
  const portalElement = document.getElementById("overlays");

  const onClose = () => {
    dispatch(setShowLoginModal(false));
    dispatch(setShowDetails(false));
    dispatch(setShowAddComment(false));
    dispatch(setShowPropertiesModal(false));
    dispatch(setMobileMenu(false));
    dispatch(setShowMobileNavOptions(false));
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.background} onClick={onClose}></div>,
        portalElement
      )}
    </>
  );
};

export default Backdrop;
