import { useDispatch } from "react-redux";
import useForm from "../../../../hooks/useForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase";
import {
  setCurrentUser,
  setError,
  setShowLoginModal,
} from "../../../../actions/Actions";
import { loginValidation } from "../../../utils/ValidationRules";
import Button from "../../../UI/Button/Button";
import ErrorDisplay from "../../../UI/ErrorDisplay/ErrorDisplay";
import ErrorMessages from "../../../utils/ErrorMessages";
import styles from "./LoginForm.module.scss";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleUserLogin = async (formData) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch(setCurrentUser(user.user.displayName));
      dispatch(setShowLoginModal(false));
    } catch (error) {
      let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
      dispatch(setError(errorMessage));
    }
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    loginValidation,
    handleUserLogin
  );

  const { email, password } = formData;

  return (
    <form className={styles.logInForm} onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        placeholder="Email"
        className={errors.email ? styles.error : null}
        value={email}
        name="email"
        autoComplete="off"
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.email} />

      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        className={errors.password ? styles.error : null}
        value={password}
        name="password"
        autoComplete="off"
        onChange={(e) => handleChange(e)}
      />
      <ErrorDisplay errorText={errors.password} />
      <ForgotPassword email={email} />

      <Button
        type="submit"
        text="Sign in"
        className={styles.signInButton}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;
