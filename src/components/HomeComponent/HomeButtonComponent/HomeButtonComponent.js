import styles from "./HomeButtonComponent.module.scss";

const HomeButtonComponent = () => {
  return (
    <div className={styles.homeButtons} data-testid="home-button-component">
      <a href="#properties">View all properties</a>
      <a href="#contact">Contact Us</a>
    </div>
  );
};

export default HomeButtonComponent;
