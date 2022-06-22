import HomeButtonComponent from "../components/HomeComponent/HomeButtonComponent";
import HomeTextComponent from "../components/HomeComponent/HomeTextComponent";
import styles from "./HomeContainer.module.scss";

const HomeContainer = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.componentContainer}>
        <HomeTextComponent />
        <HomeButtonComponent />
      </div>
    </div>
  );
};

export default HomeContainer;
