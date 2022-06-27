import styles from "./RegisterComponent.module.scss";

const RegisterComponent = () => {
  return (
    <div className={styles.notRegistered}>
      <h2>Not yet Registered?</h2>
      <button>Sign Up</button>
    </div>
  );
};

export default RegisterComponent;
