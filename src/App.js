import styles from "./App.module.scss";
import PropertiesContainer from "./containers/PropertiesContainer";
import AboutContainer from "./containers/AboutContainer";
import ContactContainer from "./containers/ContactContainer";
import HomeContainer from "./containers/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
      {/* <PropertiesContainer /> */}
      <AboutContainer />
      <ContactContainer />
      <Footer />
    </>
  );
}

export default App;
