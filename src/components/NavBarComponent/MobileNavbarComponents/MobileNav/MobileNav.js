import { useDispatch, useSelector } from "react-redux";
import {
  setMobileMenu,
  setShowLoginModal,
  setShowMobileNavOptions,
} from "../../../../actions/Actions";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const dispatch = useDispatch();

  const login_status = useSelector((state) => state.login_status);
  const currentUser = useSelector((state) => state.current_user);

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
    dispatch(setMobileMenu(false));
  };

  const onClose = () => {
    dispatch(setMobileMenu(false));
  };

  const showOptions = () => {
    dispatch(setShowMobileNavOptions(true));
  };

  const signIn = login_status ? (
    <li className={styles.signIn} onClick={showOptions}>
      {currentUser}
    </li>
  ) : (
    <li className={styles.signIn} onClick={onSignIn}>
      Sign In
    </li>
  );

  return (
    <div className={styles.hamburger}>
      <h1>PRESMIY</h1>
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

export default MobileNav;
