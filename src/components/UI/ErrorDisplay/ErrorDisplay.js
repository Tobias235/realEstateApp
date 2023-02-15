import styles from "./ErrorDisplay.module.scss";

const ErrorDisplay = (props) => {
  return <span className={styles.error}>{props.errorText}</span>;
};

export default ErrorDisplay;
