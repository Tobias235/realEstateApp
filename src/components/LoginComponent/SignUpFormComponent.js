import { auth } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useState } from "react";

const SignUpFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const authentiation = auth;
    createUserWithEmailAndPassword(authentiation, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        console.log(userCredential);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        console.log(error.message);
      });
  };

  console.log(email);
  return (
    <form onSubmit={handleRegisterUser}>
      <label>Enter Your Full Name:</label>
      <input type="text" placeholder="Enter Your Full Name:" />
      <label>Enter Your email:</label>
      <input type="email" placeholder="Enter Your email:" />
      <label>Enter Your Password:</label>
      <input type="password" placeholder="Enter Your Password:" />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpFormComponent;
