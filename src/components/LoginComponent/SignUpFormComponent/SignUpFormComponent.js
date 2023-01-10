import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase";
import { setShowLoginModal } from "../../../actions/Actions";
import { useDispatch } from "react-redux";
import styles from "./SignUpFormComponent.module.scss";
import Button from "../../UI/Button/Button";

const SignUpFormComponent = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const dispatch = useDispatch();

  const handleUserRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      updateProfile(auth.currentUser, {
        displayName: registerName,
      });
      console.log(user);
      dispatch(setShowLoginModal(false));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleUserRegister} className={styles.signUpForm}>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name:"
        autoComplete="off"
        onChange={(e) => {
          setRegisterName(e.target.value);
        }}
      />
      <label>Email:</label>
      <input
        type="email"
        placeholder="Email:"
        autoComplete="off"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password:"
        autoComplete="off"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <Button type="submit" className={styles.registerButton} text="Register" />
    </form>
  );
};

export default SignUpFormComponent;
