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

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    }
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowLogin = () => {
    if (showLoginMenu) {
      setShowLoginMenu(false);
    }
    setShowLoginMenu(true);
  };

  const handleCloseLogin = () => {
    setShowLoginMenu(false);
  };
  return (
    <>
      {showLoginMenu && <Background onClose={handleCloseLogin} />}
      <NavbarContainer onSignIn={handleShowLogin} />
      <MobileNavbar onShow={handleShowMenu} onClose={handleCloseMenu} />
      {showMenu && (
        <MobileNav onClose={handleCloseMenu} onSignIn={handleShowLogin} />
      )}
      {showLoginMenu && (
        <LoginModalContainer
          showLogin={showLoginMenu}
          onCloseLogin={handleCloseLogin}
        />
      )}
      <HomeContainer />
      <PropertiesContainer />
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
