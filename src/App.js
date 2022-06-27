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

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <NavbarContainer />
      <MobileNavbar onShow={handleShowMenu} onClose={handleCloseMenu} />
      {showMenu && <MobileNav onClose={handleCloseMenu} />}
      <LoginModalContainer />
      <HomeContainer />
      <PropertiesContainer />
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
