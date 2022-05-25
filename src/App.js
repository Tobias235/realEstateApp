import styles from "./App.module.scss";
import AboutContainer from "./containers/AboutContainer";
import ContactContainer from "./containers/ContactContainer";
import HomeContainer from "./containers/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
      <AboutContainer />
      <ContactContainer />
    </>
  );
}

export default App;
