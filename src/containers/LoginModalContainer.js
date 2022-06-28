import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

import LoginFormModal from "../components/LoginComponent/LoginFormModal";
import RegisterComponent from "../components/LoginComponent/RegisterComponent";
import SignUpFormComponent from "../components/LoginComponent/SignUpFormComponent";
import styles from "./LoginModalContainer.module.scss";

const LoginModalContainer = ({ onCloseLogin, showLogin }) => {
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
      <div className={styles.closingIcon}>
        <FaWindowClose className={styles.closeIcon} onClick={onCloseLogin} />
      </div>
      <h1>{formTitle}</h1>
      {showLoginForm}
      {showLogin && <div className={styles.notRegisteredBorder}></div>}
      {showLogin && <RegisterComponent />}
    </div>
  );
};

export default LoginModalContainer;
