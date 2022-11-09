import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setBackground, setMobileMenu } from "../../../../actions/Actions";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  const handleShowMobileNav = () => {
    dispatch(setMobileMenu(true));
    dispatch(setBackground(true));
  };
  return (
    <div className={styles.mobileNav} onClick={handleShowMobileNav}>
      <span>
        <FaBars />
      </span>
    </div>
  );
};

export default MobileNavbar;
