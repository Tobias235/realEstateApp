import DropDownComponent from "../components/NavBarComponent/DropDownComponent";
import NavButtonComponent from "../components/NavBarComponent/NavButtonComponent";
import styles from "./NavbarContainer.module.scss";
import logo from "../assets/images/roomrental.webp";

const NavbarComponent = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.rightNav}>
        <DropDownComponent></DropDownComponent>
        <NavButtonComponent href="#about">About</NavButtonComponent>
        <NavButtonComponent href="#contact">Contact</NavButtonComponent>
        <NavButtonComponent href="">Sign In</NavButtonComponent>
      </div>
    </div>
  );
};

export default NavbarComponent;
