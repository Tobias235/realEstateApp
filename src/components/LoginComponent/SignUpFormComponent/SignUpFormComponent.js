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
      <label>Enter Your Full Name:</label>
      <input
        type="text"
        placeholder="Enter Your Full Name:"
        onChange={(e) => {
          setRegisterName(e.target.value);
        }}
      />
      <label>Enter Your email:</label>
      <input
        type="email"
        placeholder="Enter Your email:"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <label>Enter Your Password:</label>
      <input
        type="password"
        placeholder="Enter Your Password:"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <Button type="submit" className={styles.registerButton} text="Register" />
    </form>
  );
};

export default SignUpFormComponent;
