import AboutUsComponent from "../components/AboutComponent/AboutUsComponent";
import styles from "./AboutContainer.module.scss";

const AboutContainer = () => {
  return (
    <div className={styles.about}>
      <h1>About PRESMIY</h1>
      <AboutUsComponent />
    </div>
  );
};

export default AboutContainer;
