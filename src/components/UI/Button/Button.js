import styles from "./Button.module.scss";

const Button = ({ type, text, className, onClick, onSubmit, disabled }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
