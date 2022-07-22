import styles from "./Button.module.scss";

const Button = ({ type, text, className, onClick }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
