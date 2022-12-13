import { ReactComponent as BurgerIcon } from "../../../../assets/images/burgerIcon.svg";
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
      <BurgerIcon />
    </div>
  );
};

export default MobileNavbar;
