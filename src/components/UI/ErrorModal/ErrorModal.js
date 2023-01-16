import { useSelector } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  const error = useSelector((state) => state.error);

  return (
    <Modal className={styles.errorModalContainer}>
      <Backdrop className={styles.backDrop} onClick={props.onClick} />
      <h1>Error</h1>
      <p>{error}</p>
      <Button text="Close" onClick={props.onClick} />
    </Modal>
  );
};

export default ErrorModal;
