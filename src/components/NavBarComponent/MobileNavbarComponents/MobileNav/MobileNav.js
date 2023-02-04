import { useDispatch, useSelector } from "react-redux";
import {
  setMobileMenu,
  setModalName,
  setShowLoginModal,
  setShowMobileUserDropdown,
} from "../../../../actions/Actions";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);

  const signIn = name ? (
    <li
      className={styles.signIn}
      onClick={() => dispatch(setShowMobileUserDropdown(true))}
    >
      {name}
    </li>
  ) : (
    <li
      className={styles.signIn}
      onClick={() => {
        dispatch(setShowLoginModal(true));
        dispatch(setMobileMenu(false));
        dispatch(setModalName("login"));
      }}
    >
      Sign In
    </li>
  );

  return (
    <div className={styles.hamburger}>
      <h1>PRESMIY</h1>
      <ul>
        <li onClick={() => dispatch(setMobileMenu(false))}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => dispatch(setMobileMenu(false))}>
          <a href="#contact">Contacts</a>
        </li>
        <li onClick={() => dispatch(setMobileMenu(false))}>
          <a href="#properties">Properties</a>
        </li>
        {signIn}
      </ul>
    </div>
  );
};

export default MobileNav;
