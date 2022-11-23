import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMobileMenu } from "../../../../actions/Actions";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  const handleShowMobileNav = () => {
    dispatch(setMobileMenu(true));
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
