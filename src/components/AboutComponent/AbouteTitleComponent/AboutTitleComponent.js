import styles from "./AboutTitleComponent.module.scss";

const AboutTitleComponent = () => {
  return (
    <div className={styles.aboutTitle} data-testid="about-title-component">
      <h1>About PRESMIY</h1>
    </div>
  );
};

export default AboutTitleComponent;
