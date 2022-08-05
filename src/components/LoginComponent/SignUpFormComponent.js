import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { setBackground, setShowLoginModal } from "../../actions/Actions";
import { useDispatch } from "react-redux";

const SignUpFormComponent = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();

  const handleUserRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      console.log(user);
      console.log("success");
      dispatch(setShowLoginModal(false));
      dispatch(setBackground(false));
    } catch (error) {
      console.log("fail");
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleUserRegister}>
      {/* <label>Enter Your Full Name:</label>
      <input
        type="text"
        placeholder="Enter Your Full Name:"
        onChange={(e) => {
          setRegisterName(e.target.value);
        }}
      /> */}
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
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpFormComponent;
