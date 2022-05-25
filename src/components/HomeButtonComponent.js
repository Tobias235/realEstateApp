import styles from "./HomeButtonComponent.module.scss";

const HomeButtonComponent = () => {
  return (
    <div className={styles.homeButtons}>
      <button>View all properties</button>
      <button>Contact Us</button>
    </div>
  );
};

export default HomeButtonComponent;
