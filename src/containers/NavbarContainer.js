import DropDownComponent from "../components/NavBarComponent/DropDownComponent";
import NavButtonComponent from "../components/NavBarComponent/NavButtonComponent";
import styles from "./NavbarContainer.module.scss";
import logo from "../assets/images/roomrental.webp";

const NavbarComponent = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.rightNav}>
        <DropDownComponent></DropDownComponent>
        <NavButtonComponent>About</NavButtonComponent>
        <NavButtonComponent>Contact</NavButtonComponent>
        <NavButtonComponent>Sign In</NavButtonComponent>
      </div>
    </div>
  );
};

export default NavbarComponent;
