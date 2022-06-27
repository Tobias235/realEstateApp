import { useState } from "react";

import LoginFormModal from "../components/LoginComponent/LoginFormModal";
import RegisterComponent from "../components/LoginComponent/RegisterComponent";
import SignUpFormComponent from "../components/LoginComponent/SignUpFormComponent";
import styles from "./LoginModalContainer.module.scss";

const LoginModalContainer = () => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = showLogin ? (
    <LoginFormModal />
  ) : (
    <SignUpFormComponent />
  );

  const formTitle = showLogin
    ? "Login to your account"
    : "Register Your Account";

  return (
    <div className={styles.loginModal}>
      <h1>{formTitle}</h1>
      {showLoginForm}
      {showLogin && <div className={styles.notRegisteredBorder}></div>}
      {showLogin && <RegisterComponent />}
    </div>
  );
};

export default LoginModalContainer;
