import HomeButtonComponent from "../../components/HomeComponent/HomeButtonComponent/HomeButtonComponent";
import HomeTextComponent from "../../components/HomeComponent/HomeTextComponent/HomeTextComponent";
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
