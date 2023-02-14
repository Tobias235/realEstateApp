import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalName, setShowLoginModal } from "../../../actions/ModalActions";
import LoginForm from "./LoginForm/LoginForm";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import SignUpFormComponent from "../SignUpFormComponent/SignUpFormComponent";
import ClosingIcon from "../../UI/CloseIcon/ClosingIcon";
import styles from "./LoginModal.module.scss";

const LoginModal = () => {
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();

  const handleShowRegister = () => {
    showRegister ? setShowRegister(false) : setShowRegister(true);
  };

  const showLoginForm = !showRegister ? <LoginForm /> : <SignUpFormComponent />;

  const formTitle = !showRegister
    ? "Login to your account"
    : "Register your account";

  return (
    <div className={styles.loginModal}>
      <ClosingIcon
        onClick={() => {
          dispatch(setShowLoginModal(false));
          dispatch(setModalName(""));
        }}
      />
      <h1>{formTitle}</h1>
      {showLoginForm}
      {!showRegister && <div className={styles.notRegisteredBorder}></div>}
      {!showRegister && (
        <RegisterComponent onShowRegister={handleShowRegister} />
      )}
    </div>
  );
};

export default LoginModal;
