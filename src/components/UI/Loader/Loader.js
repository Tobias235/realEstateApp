import styles from "./Loader.module.scss";

const Loader = (props) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <span>{props.children}</span>
    </div>
  );
};

export default Loader;
