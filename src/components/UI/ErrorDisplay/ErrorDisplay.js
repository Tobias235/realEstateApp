import styles from "./ErrorDisplay.module.scss";

const ErrorDisplay = (props) => {
  return (
    <span className={props.errorText ? styles.error : styles.hidden}>
      {props.errorText}
    </span>
  );
};

export default ErrorDisplay;
