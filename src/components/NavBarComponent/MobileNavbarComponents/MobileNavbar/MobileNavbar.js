import { ReactComponent as BurgerIcon } from "../../../../assets/images/burgerIcon.svg";
import { useDispatch } from "react-redux";
import { setMobileMenu } from "../../../../actions/MobileActions";
import { setModalName } from "../../../../actions/ModalActions";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.mobileNav}>
      <BurgerIcon
        onClick={() => {
          dispatch(setMobileMenu(true));
          dispatch(setModalName("mobile"));
        }}
      />
    </div>
  );
};

export default MobileNavbar;
