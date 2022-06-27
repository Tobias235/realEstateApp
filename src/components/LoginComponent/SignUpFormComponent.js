import styles from "./SignUpFormComponent.module.scss";

const SignUpFormComponent = () => {
  return (
    <form className={styles.signUpModal}>
      <label>Enter Your Full Name:</label>
      <input type="text" placeholder="Enter Your Full Name:" />
      <label>Enter Your email:</label>
      <input type="email" placeholder="Enter Your email:" />
      <label>Enter Your Password:</label>
      <input type="email" placeholder="Enter Your Password:" />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpFormComponent;
