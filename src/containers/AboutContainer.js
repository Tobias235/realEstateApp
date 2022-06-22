import AboutUsComponent from "../components/AboutComponent/AboutUsComponent";
import AboutTitleComponent from "../components/AboutComponent/AboutTitleComponent";
import styles from "./AboutContainer.module.scss";

const AboutContainer = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.spaceTop}></div>
      <AboutTitleComponent />
      <AboutUsComponent />
    </div>
  );
};

export default AboutContainer;
