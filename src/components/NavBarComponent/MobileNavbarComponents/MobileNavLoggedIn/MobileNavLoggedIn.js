import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setError } from "../../../../actions/LoadingActions";
import {
  setMobileMenu,
  setShowMobileUserDropdown,
} from "../../../../actions/MobileActions";
import { setModalName, setShowProfile } from "../../../../actions/ModalActions";
import { setCurrentUser } from "../../../../actions/UserActions";
import { auth } from "../../../../Firebase";
import ErrorMessages from "../../../utils/ErrorMessages";
import styles from "./MobileNavLoggedIn.module.scss";

const MobileNavLoggedIn = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    try {
      signOut(auth);
      dispatch(setCurrentUser(null, null));
      dispatch(setShowMobileUserDropdown(false));
      dispatch(setMobileMenu(false));
    } catch (error) {
      let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
      dispatch(setError(errorMessage));
    }
  };

  return (
    <ul className={styles.mobileNav}>
      <h1>PRESMIY</h1>
      <li
        onClick={() => {
          dispatch(setShowProfile(true));
          dispatch(setModalName("profile"));
          dispatch(setShowMobileUserDropdown(false));
          dispatch(setMobileMenu(false));
        }}
      >
        Profile
      </li>
      <li onClick={handleSignOut}>Sign Out</li>
    </ul>
  );
};

export default MobileNavLoggedIn;
