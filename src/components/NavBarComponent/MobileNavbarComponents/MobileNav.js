import { useDispatch, useSelector } from "react-redux";
import {
  setBackground,
  setMobileMenu,
  setShowLoginModal,
  setLoginStatus,
  setCurrentUser,
} from "../../../actions/Actions";
import styles from "./MobileNav.module.scss";

const Hamburger = () => {
  const dispatch = useDispatch();

  const login_status = useSelector((state) => state.login_status);
  const currentUser = useSelector((state) => state.current_user);

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
    dispatch(setMobileMenu(false));
    dispatch(setBackground(true));
  };

  const onSignOut = () => {
    dispatch(setLoginStatus(false));
    dispatch(setCurrentUser(null));
    dispatch(setMobileMenu(false));
    dispatch(setBackground(false));
  };

  const onClose = () => {
    dispatch(setMobileMenu(false));
    dispatch(setBackground(false));
  };

  const signIn = login_status ? (
    <li className={styles.signIn} onClick={onSignOut}>
      {currentUser}
    </li>
  ) : (
    <li className={styles.signIn} onClick={onSignIn}>
      Sign In
    </li>
  );

  return (
    <div className={styles.hamburger}>
      <h1>Commerce</h1>
      <ul>
        <li onClick={onClose}>
          <a href="#home">Home</a>
        </li>
        <li onClick={onClose}>
          <a href="#contact">Contacts</a>
        </li>
        <li onClick={onClose}>
          <a href="#properties">Properties</a>
        </li>
        {signIn}
      </ul>
    </div>
  );
};

export default Hamburger;
