import styles from "./RegisterComponent.module.scss";

const RegisterComponent = ({ onShowRegister }) => {
  return (
    <div className={styles.notRegistered}>
      <h2>Not yet registered?</h2>
      <button onClick={onShowRegister}>Sign Up</button>
    </div>
  );
};

export default RegisterComponent;
