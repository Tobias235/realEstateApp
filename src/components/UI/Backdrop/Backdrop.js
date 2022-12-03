import { useDispatch, useSelector } from "react-redux";
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

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const portalElement = document.getElementById("overlays");

  const onClose = () => {
    if (loading) return;

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
        <div
          className={`${styles.background} ${props.className}`}
          onClick={onClose}
        >
          {props.children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Backdrop;
