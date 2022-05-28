import styles from "./NavButtonComponent.module.scss";

const NavButtonComponent = (props) => {
  return <button className={styles.navButton}>{props.children}</button>;
};

export default NavButtonComponent;
