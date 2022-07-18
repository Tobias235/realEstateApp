import { useState } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase";
import {
  setBackground,
  setLoginStatus,
  setShowLoginModal,
} from "../../actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const LoginFormModal = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login_modal = useSelector((state) => state.login_modal);
  const dispatch = useDispatch();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      dispatch(setLoginStatus(true));
      dispatch(setShowLoginModal(false));
      dispatch(setBackground(false));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleUserLogin}>
      <label>Enter Your email:</label>
      <input
        type="email"
        placeholder="Enter Your email:"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <label>Enter Your Password:</label>
      <input
        type="password"
        placeholder="Enter Your Password:"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginFormModal;
