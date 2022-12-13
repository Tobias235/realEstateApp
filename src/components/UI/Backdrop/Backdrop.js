import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";

const Backdrop = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${styles.background} ${props.className}`}
          onClick={props.onClick}
        >
          {props.children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Backdrop;
