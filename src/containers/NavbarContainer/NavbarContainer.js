import { useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import DropDownComponent from "../../components/NavBarComponent/DropDownComponent/DropDownComponent";
import NavButtonComponent from "../../components/NavBarComponent/NavButtonComponent/NavButtonComponent";
import logo from "../../assets/images/roomrental.webp";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/UserActions";
import {
  setModalName,
  setShowLoginModal,
  setShowProfile,
} from "../../actions/ModalActions";
import styles from "./NavbarContainer.module.scss";

const NavbarComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);
  const name = useSelector((state) => state.userReducer.name);

  const dispatch = useDispatch();

  const onSignOut = () => {
    try {
      signOut(auth);
      dispatch(setCurrentUser(null, null));
    } catch (error) {
      console.log(error.message);
    }
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

  const signIn = name ? (
    <ul
      className={styles.signInDropdownContainer}
      onClick={() =>
        showDropdown ? setShowDropdown(false) : setShowDropdown(true)
      }
      ref={dropdown}
    >
      <li className={styles.signInDropdown}>{name}</li>
      {showDropdown && (
        <ul className={styles.dropDown}>
          <li
            onClick={() => {
              dispatch(setShowProfile(true));
              dispatch(setModalName("profile"));
            }}
          >
            Profile
          </li>
          <li onClick={onSignOut}>Sign Out</li>
        </ul>
      )}
    </ul>
  ) : (
    <span
      className={styles.signIn}
      onClick={() => {
        dispatch(setShowLoginModal(true));
        dispatch(setModalName("login"));
      }}
    >
      Sign in
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
