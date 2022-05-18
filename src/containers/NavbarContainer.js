import NavButtonComponent from "../components/NavButtonComponent";
import styles from "./NavbarContainer.module.scss";

const NavbarComponent = () => {
  return (
    <div className={styles.nav}>
      <NavButtonComponent>Properties</NavButtonComponent>
      <NavButtonComponent>About</NavButtonComponent>
      <NavButtonComponent>Contact</NavButtonComponent>
    </div>
  );
};

export default NavbarComponent;
