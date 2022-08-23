import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  setBackground,
  setCurrentUser,
  setLoginStatus,
  setMobileMenu,
  setShowMobileNavOptions,
} from "../../../actions/Actions";
import { auth } from "../../../Firebase";

import styles from "./MobileNavLoggedIn.module.scss";

const MobileNavLoggedIn = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    try {
      signOut(auth);
      console.log("logged out");
      dispatch(setLoginStatus(false));
      dispatch(setCurrentUser(null));
      dispatch(setShowMobileNavOptions(false));
      dispatch(setLoginStatus(false));
      dispatch(setBackground(false));
      dispatch(setMobileMenu(false));
    } catch (error) {
      console.log("error");
      console.log(error.message);
    }
  };

  return (
    <ul className={styles.mobileNav}>
      <h1>PRESMIY</h1>
      <li>
        <a href="#">Previous Comments</a>
      </li>
      <li>
        <a href="#" onClick={handleSignOut}>
          Sign Out
        </a>
      </li>
    </ul>
  );
};

export default MobileNavLoggedIn;
