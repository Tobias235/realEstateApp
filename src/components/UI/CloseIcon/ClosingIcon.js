import { ReactComponent as CloseIcon } from "../../../assets/images/closeIcon.svg";
import styles from "./ClosingIcon.module.scss";

const ClosingIcon = (props) => {
  return (
    <div className={styles.closingIcon}>
      <CloseIcon onClick={props.onClick} />
    </div>
  );
};

export default ClosingIcon;
