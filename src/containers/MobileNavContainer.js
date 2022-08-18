import styles from "./MobileNavContainer.module.scss";
import { useSelector } from "react-redux";
import MobileNav from "../components/NavBarComponent/MobileNavbarComponents/MobileNav";
import MobileNavLoggedIn from "../components/NavBarComponent/MobileNavbarComponents/MobileNavLoggedIn";

const MobileNavContainer = () => {
  const profileClicked = useSelector((state) => state.show_options);

  const showLoggedinOptions = profileClicked ? (
    <MobileNavLoggedIn />
  ) : (
    <MobileNav />
  );

  return (
    <>
      <h1 className={styles.presmiy}>PRESMIY</h1>
      {showLoggedinOptions}
    </>
  );
};

export default MobileNavContainer;
