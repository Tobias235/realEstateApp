import styles from "./Button.module.scss";

const Button = ({ type, text, className, onClick, disabled }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
