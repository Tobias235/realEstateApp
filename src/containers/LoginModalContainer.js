import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

import LoginFormModal from "../components/LoginComponent/LoginFormModal";
import RegisterComponent from "../components/LoginComponent/RegisterComponent";
import SignUpFormComponent from "../components/LoginComponent/SignUpFormComponent";
import styles from "./LoginModalContainer.module.scss";

const LoginModalContainer = ({ onClose }) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    if (showRegister) {
      setShowRegister(false);
    } else {
      setShowRegister(true);
    }
  };

  const showLoginForm = !showRegister ? (
    <LoginFormModal />
  ) : (
    <SignUpFormComponent />
  );

  const formTitle = !showRegister
    ? "Login to your account"
    : "Register Your Account";

  return (
    <div className={styles.loginModal}>
      <div className={styles.closingIcon}>
        <FaWindowClose className={styles.closeIcon} onClick={onClose} />
      </div>
      <h1>{formTitle}</h1>
      {showLoginForm}
      {!showRegister && <div className={styles.notRegisteredBorder}></div>}
      {!showRegister && (
        <RegisterComponent onShowRegister={handleShowRegister} />
      )}
    </div>
  );
};

export default LoginModalContainer;
