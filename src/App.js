import { useState } from "react";
import PropertiesContainer from "./containers/PropertiesContainer/PropertiesContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer/NavbarContainer";
import Footer from "./components/Footer/Footer";
import MobileNavbar from "./components/NavBarComponent/MobileNavbarComponents/MobileNavbar/MobileNavbar";
import PopupNotifications from "./components/UI/PopupNotifcation/PopupNotification";
import MobileNavContainer from "./containers/NavbarContainer/MobileNavContainer";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "./actions/Actions";
// import styles from "./App.module.scss";
import ModalContainer from "./containers/ModalContainer/ModalContainer";

function App() {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const mobile_menu = useSelector((state) => state.mobile_menu);

  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(setShowLoginModal(false));
  };

  const handleShowLogin = () => {
    if (showLoginMenu) {
      setShowLoginMenu(false);
    }
    setShowLoginMenu(true);
  };

  return (
    <>
      <ModalContainer />
      <NavbarContainer />
      <MobileNavbar onClose={handleCloseMenu} />
      {mobile_menu && (
        <MobileNavContainer
          onClose={handleCloseMenu}
          onSignIn={handleShowLogin}
        />
      )}
      <PopupNotifications />
      <HomeContainer />
      <PropertiesContainer />
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
