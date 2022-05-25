import HomeButtonComponent from "../components/HomeButtonComponent";
import styles from "./HomeContainer.module.scss";

const HomeContainer = () => {
  return (
    <div className={styles.home}>
      <h1>Take a step farther to find a new home</h1>
      <h2>Contact us and wake up in a new home tomorrow!</h2>
      <HomeButtonComponent />
    </div>
  );
};

export default HomeContainer;
