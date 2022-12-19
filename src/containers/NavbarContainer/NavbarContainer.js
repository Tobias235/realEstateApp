import { useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import DropDownComponent from "../../components/NavBarComponent/DropDownComponent/DropDownComponent";
import NavButtonComponent from "../../components/NavBarComponent/NavButtonComponent/NavButtonComponent";
import logo from "../../assets/images/roomrental.webp";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginStatus,
  setShowLoginModal,
  setCurrentUser,
  setShowUploadPropertiesModal,
  setCurrentUserId,
} from "../../actions/Actions";
import styles from "./NavbarContainer.module.scss";

const NavbarComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  const login_status = useSelector((state) => state.login_status);
  const currentUser = useSelector((state) => state.current_user);

  const dispatch = useDispatch();

  const onSignOut = () => {
    try {
      signOut(auth);
      dispatch(setLoginStatus(false));
      dispatch(setCurrentUser(null));
      dispatch(setCurrentUserId(null));
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
  };

  const AdminPropertiesModal = () => {
    dispatch(setShowUploadPropertiesModal(true));
  };

  const closeOpenMenus = (e) => {
    if (
      dropdown.current &&
      showDropdown &&
      !dropdown.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  const signIn = login_status ? (
    <ul
      className={styles.signInDropdownContainer}
      onClick={() =>
        showDropdown ? setShowDropdown(false) : setShowDropdown(true)
      }
      ref={dropdown}
    >
      <li className={styles.signInDropdown}>{currentUser}</li>
      {showDropdown && (
        <ul className={styles.dropDown}>
          <li onClick={AdminPropertiesModal}>Upload Properties</li>
          <li>Previous Comments</li>
          <li onClick={onSignOut}>Sign Out</li>
        </ul>
      )}
    </ul>
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
        <DropDownComponent />
        <NavButtonComponent href="#about">About</NavButtonComponent>
        <NavButtonComponent href="#contact">Contact</NavButtonComponent>
        {signIn}
      </div>
    </div>
  );
};

export default NavbarComponent;
