import DropDownComponent from "../components/NavBarComponent/DropDownComponent";
import NavButtonComponent from "../components/NavBarComponent/NavButtonComponent";
import styles from "./NavbarContainer.module.scss";
import logo from "../assets/images/roomrental.webp";
import { useSelector, useDispatch } from "react-redux";
import {
  setBackground,
  setLoginStatus,
  setShowLoginModal,
} from "../actions/Actions";
const NavbarComponent = () => {
  const login_status = useSelector((state) => state.login_status);
  const login_modal = useSelector((state) => state.login_modal);

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(setLoginStatus(false));
  };

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
    dispatch(setBackground(true));
  };

  const signIn = login_status ? (
    <span className={styles.signIn} onClick={onSignOut}>
      Sign Out
    </span>
  ) : (
    <span className={styles.signIn} onClick={onSignIn}>
      Sign In
    </span>
  );

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
        {signIn}
      </div>
    </div>
  );
};

export default NavbarComponent;
