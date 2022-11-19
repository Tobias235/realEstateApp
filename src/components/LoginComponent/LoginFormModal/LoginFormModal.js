import { useState, useEffect } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase";

import {
  setBackground,
  setLoginStatus,
  setCurrentUser,
  setShowLoginModal,
} from "../../../actions/Actions";
import { useDispatch } from "react-redux";
import Button from "../../utils/Button/Button";
import styles from "./LoginFormModal.module.scss";

const LoginFormModal = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentErrorMessage, setCurrentErrorMessage] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const dispatch = useDispatch();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch(setCurrentUser(user.user.displayName));
      dispatch(setLoginStatus(true));
      dispatch(setShowLoginModal(false));
      dispatch(setBackground(false));
    } catch (error) {
      setCurrentErrorMessage(error);
    }
  };

  useEffect(() => {
    if (currentErrorMessage === null) {
      return;
    }
    const errorString = currentErrorMessage.toString().split("/");
    const error = errorString[1].replace(/[^a-zA-Z0-9 ]/g, " ").trim();
    console.log(error);
    setEmailError(
      error === "invalid email" ||
        error === "user not found" ||
        error === "internal error"
        ? true
        : false
    );
    setUserNotFound(error === "user not found" ? true : false);
    setPasswordError(
      error === "wrong password" || error === "internal error" ? true : false
    );
  }, [currentErrorMessage]);

  const passwordText = passwordError ? styles.errorText : null;
  const mailText = emailError ? styles.errorText : null;

  const errorEmail = emailError && (
    <span className={mailText}>
      {userNotFound
        ? "User Not Found, sign up below"
        : "Please enter a valid e-mail"}
    </span>
  );

  const errorPassword = passwordError && (
    <span className={passwordText}>Please enter correct password</span>
  );

  return (
    <form onSubmit={handleUserLogin} className={styles.logInForm}>
      <label className={mailText}>Enter Your email:</label>
      <input
        type="email"
        placeholder="Enter Your email:"
        className={emailError ? styles.error : null}
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      {errorEmail}
      <label className={passwordText}>Enter Your Password:</label>
      <input
        type="password"
        placeholder="Enter Your Password:"
        className={passwordError ? styles.error : null}
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      {errorPassword}
      <Button type="submit" text="Sign In" className={styles.signInButton} />
    </form>
  );
};

export default LoginFormModal;
