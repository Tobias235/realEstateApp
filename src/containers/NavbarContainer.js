import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import Dropdown from "react-multilevel-dropdown";

import DropDownComponent from "../components/NavBarComponent/DropDownComponent";
import NavButtonComponent from "../components/NavBarComponent/NavButtonComponent";
import styles from "./NavbarContainer.module.scss";
import logo from "../assets/images/roomrental.webp";
import { useSelector, useDispatch } from "react-redux";
import {
  setBackground,
  setLoginStatus,
  setShowLoginModal,
  setCurrentUser,
} from "../actions/Actions";

const NavbarComponent = () => {
  const login_status = useSelector((state) => state.login_status);
  const currentUser = useSelector((state) => state.current_user);

  const dispatch = useDispatch();

  const onSignOut = () => {
    try {
      signOut(auth);
      console.log("logged out");
      dispatch(setLoginStatus(false));
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log("error");
      console.log(error.message);
    }
  };

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
    dispatch(setBackground(true));
  };

  const signIn = login_status ? (
    <Dropdown className={styles.navButton} position="left" title={currentUser}>
      <Dropdown.Item className={styles.subMenu}>
        Previous Comments
      </Dropdown.Item>
      <Dropdown.Item className={styles.subMenu} onClick={onSignOut}>
        Sign Out
      </Dropdown.Item>
    </Dropdown>
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
