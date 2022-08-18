import { useState } from "react";

// import styles from "./App.module.scss";
import PropertiesContainer from "./containers/PropertiesContainer";
import AboutContainer from "./containers/AboutContainer";
import ContactContainer from "./containers/ContactContainer";
import HomeContainer from "./containers/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer";
import Footer from "./components/Footer";
import MobileNav from "./components/NavBarComponent/MobileNavbarComponents/MobileNav";
import MobileNavbar from "./components/NavBarComponent/MobileNavbarComponents/MobileNavbar";
import LoginModalContainer from "./containers/LoginModalContainer";
import Background from "./components/Background";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu, setShowLoginModal } from "./actions/Actions";
import MobileNavContainer from "./containers/MobileNavContainer";

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
