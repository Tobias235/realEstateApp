import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase";

import {
  setLoginStatus,
  setCurrentUser,
  setShowLoginModal,
  setCurrentUserId,
} from "../../../../actions/Actions";
import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentErrorMessage, setCurrentErrorMessage] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch(setCurrentUserId(user.user.uid));
      dispatch(setCurrentUser(user.user.displayName));
      dispatch(setLoginStatus(true));
      dispatch(setShowLoginModal(false));
    } catch (error) {
      setCurrentErrorMessage(error);
    }
  };

  useEffect(() => {
    if (currentErrorMessage === null) {
      return;
    }
    const error = currentErrorMessage
      .toString()
      .split("/")[1]
      .replace(/[^a-zA-Z0-9 ]/g, " ")
      .trim();
    setEmailError(
      error === "invalid email" ||
        error === "user not found" ||
        error === "internal error"
        ? error
        : null
    );
    setPasswordError(
      error === "wrong password" || error === "internal error" ? error : null
    );
  }, [currentErrorMessage]);

  const passwordText = passwordError ? styles.errorText : null;
  const mailText = emailError ? styles.errorText : null;

  const errorEmail = emailError && (
    <span className={mailText}>{emailError}</span>
  );

  const errorPassword = passwordError && (
    <span className={passwordText}>{passwordError}</span>
  );

  return (
    <form onSubmit={handleUserLogin} className={styles.logInForm}>
      <label className={mailText}>Email:</label>
      <input
        type="email"
        placeholder="Email:"
        className={emailError ? styles.error : null}
        autoComplete="off"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      {errorEmail}
      <label className={passwordText}>Password:</label>
      <input
        type="password"
        placeholder="Password:"
        className={passwordError ? styles.error : null}
        autoComplete="off"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      {errorPassword}
      <Button type="submit" text="Sign In" className={styles.signInButton} />
    </form>
  );
};

export default LoginForm;
