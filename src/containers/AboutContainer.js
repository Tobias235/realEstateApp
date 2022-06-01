import AboutUsComponent from "../components/AboutComponent/AboutUsComponent";
import AboutTitleComponent from "../components/AboutComponent/AboutTitleComponent";
import styles from "./AboutContainer.module.scss";

const AboutContainer = () => {
  return (
    <div className={styles.about}>
      <AboutTitleComponent />
      <AboutUsComponent />
    </div>
  );
};

export default AboutContainer;
