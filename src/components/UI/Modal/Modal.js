import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modal}>{props.children}</div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
