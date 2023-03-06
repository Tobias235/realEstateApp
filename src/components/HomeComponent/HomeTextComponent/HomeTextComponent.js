import styles from "./HomeTextComponent.module.scss";

const HomeTextComponent = () => {
  return (
    <div className={styles.homeTextComponent} data-testid="home-text-component">
      <h1>Take a step farther to find a new home</h1>
      <h2>Contact us and wake up in a new home tomorrow!</h2>
    </div>
  );
};

export default HomeTextComponent;
