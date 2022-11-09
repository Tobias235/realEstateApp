import styles from "./NavButtonComponent.module.scss";

const NavButtonComponent = (props) => {
  return (
    <a href={props.href} className={styles.navLink}>
      {props.children}
    </a>
  );
};

export default NavButtonComponent;
