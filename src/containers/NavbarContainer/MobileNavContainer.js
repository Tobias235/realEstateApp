import { useSelector } from "react-redux";
import MobileNav from "../../components/NavBarComponent/MobileNavbarComponents/MobileNav/MobileNav";
import MobileNavLoggedIn from "../../components/NavBarComponent/MobileNavbarComponents/MobileNavLoggedIn/MobileNavLoggedIn";

const MobileNavContainer = () => {
  const profileClicked = useSelector((state) => state.show_options);

  const showLoggedinOptions = profileClicked ? (
    <MobileNavLoggedIn />
  ) : (
    <MobileNav />
  );

  return <>{showLoggedinOptions}</>;
};

export default MobileNavContainer;
