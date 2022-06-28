import styles from "./Background.module.scss";

const Background = ({ onClose }) => {
  return <div className={styles.background} onClick={onClose}></div>;
};

export default Background;
