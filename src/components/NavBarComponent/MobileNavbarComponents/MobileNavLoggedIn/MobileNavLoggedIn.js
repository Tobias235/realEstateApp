import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  setLoginStatus,
  setMobileMenu,
  setShowMobileUserDropdown,
} from "../../../../actions/Actions";
import { auth } from "../../../../Firebase";

import styles from "./MobileNavLoggedIn.module.scss";

const MobileNavLoggedIn = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    try {
      signOut(auth);
      console.log("logged out");
      dispatch(setLoginStatus(false));
      dispatch(setCurrentUser(null));
      dispatch(setShowMobileUserDropdown(false));
      dispatch(setLoginStatus(false));
      dispatch(setMobileMenu(false));
    } catch (error) {
      console.log("error");
      console.log(error.message);
    }
  };

  return (
    <ul className={styles.mobileNav}>
      <h1>PRESMIY</h1>
      <li>Previous Comments</li>
      <li onClick={handleSignOut}>Sign Out</li>
    </ul>
  );
};

export default MobileNavLoggedIn;
