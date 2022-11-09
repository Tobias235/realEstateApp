import { useState } from "react";
import PropertiesContainer from "./containers/PropertiesContainer/PropertiesContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer/NavbarContainer";
import Footer from "./components/Footer/Footer";
import MobileNavbar from "./components/NavBarComponent/MobileNavbarComponents/MobileNavbar/MobileNavbar";
import LoginModalContainer from "./containers/LoginModalContainer/LoginModalContainer";
import PopupNotifications from "./components/utils/PopupNotifcation/PopupNotification";
import MobileNavContainer from "./containers/NavbarContainer/MobileNavContainer";
import Background from "./components/Background/Background";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "./actions/Actions";
// import styles from "./App.module.scss";

function App() {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const login_modal = useSelector((state) => state.login_modal);
  const mobile_menu = useSelector((state) => state.mobile_menu);
  const show_background = useSelector((state) => state.show_background);
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
      {show_background && <Background />}
      <NavbarContainer />
      <MobileNavbar onClose={handleCloseMenu} />
      {mobile_menu && (
        <MobileNavContainer
          onClose={handleCloseMenu}
          onSignIn={handleShowLogin}
        />
      )}
      <PopupNotifications />
      {login_modal && <LoginModalContainer />}
      <HomeContainer />
      <PropertiesContainer />
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
