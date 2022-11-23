import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setShowLoginModal } from "../../actions/Actions";

import LoginFormModal from "../../components/LoginComponent/LoginFormModal/LoginFormModal";
import RegisterComponent from "../../components/LoginComponent/RegisterComponent/RegisterComponent";
import SignUpFormComponent from "../../components/LoginComponent/SignUpFormComponent/SignUpFormComponent";
import styles from "./LoginModalContainer.module.scss";

const LoginModalContainer = () => {
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  const handleShowRegister = () => {
    if (showRegister) {
      setShowRegister(false);
    } else {
      setShowRegister(true);
    }
  };

  const onClose = () => {
    dispatch(setShowLoginModal(false));
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
