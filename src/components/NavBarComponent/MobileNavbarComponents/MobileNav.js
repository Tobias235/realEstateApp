import { useDispatch, useSelector } from "react-redux";
import {
  setBackground,
  setMobileMenu,
  setShowLoginModal,
} from "../../../actions/Actions";
import styles from "./MobileNav.module.scss";

const Hamburger = () => {
  const dispatch = useDispatch();

  const login_modal = useSelector((state) => state.login_modal);

  const onSignIn = () => {
    dispatch(setShowLoginModal(true));
    dispatch(setMobileMenu(false));
    dispatch(setBackground(true));
  };

  const onClose = () => {
    dispatch(setMobileMenu(false));
    dispatch(setBackground(false));
  };

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
        <li onClick={onSignIn}>Sign In</li>
      </ul>
    </div>
  );
};

export default Hamburger;
