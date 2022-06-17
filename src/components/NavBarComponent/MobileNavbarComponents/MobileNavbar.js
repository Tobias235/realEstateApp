import { FaBars } from "react-icons/fa";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = ({ onShow }) => {
  return (
    <div className={styles.mobileNav} onClick={onShow}>
      <span>
        <FaBars />
      </span>
    </div>
  );
};

export default MobileNavbar;
