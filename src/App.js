import PropertiesContainer from "./containers/PropertiesContainer/PropertiesContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer/NavbarContainer";
import Footer from "./components/Footer/Footer";
import MobileNavbar from "./components/NavBarComponent/MobileNavbarComponents/MobileNavbar/MobileNavbar";
import PopupNotifications from "./components/UI/PopupNotifcation/PopupNotification";
// import styles from "./App.module.scss";
import ModalContainer from "./containers/ModalContainer/ModalContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      <MobileNavbar />
      <PopupNotifications />
      <ModalContainer />
      <HomeContainer />
      <PropertiesContainer />
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
