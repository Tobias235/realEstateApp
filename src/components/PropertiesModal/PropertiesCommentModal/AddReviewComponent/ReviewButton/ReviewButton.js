import Button from "../../../../UI/Button/Button";
import styles from "./ReviewButton.module.scss";

const ReviewButton = (props) => {
  return (
    <div className={styles.buttonContainer}>
      <Button
        type="button"
        text="Close"
        className={styles.reviewButton}
        onClick={props.onClose}
      />
      <Button
        type="button"
        text="Submit"
        className={styles.reviewButton}
        onClick={props.onClick}
      />
    </div>
  );
};

export default ReviewButton;
