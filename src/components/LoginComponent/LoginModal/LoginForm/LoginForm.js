import { useDispatch } from "react-redux";
import useForm from "../../../../hooks/useForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../Firebase";
import { loginValidation } from "../../../utils/ValidationRules";
import { setCurrentUser } from "../../../../actions/UserActions";
import { setShowLoginModal } from "../../../../actions/ModalActions";
import { setError } from "../../../../actions/LoadingActions";
import Button from "../../../UI/Button/Button";
import ErrorDisplay from "../../../UI/ErrorDisplay/ErrorDisplay";
import ErrorMessages from "../../../utils/ErrorMessages";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();

  const demoEmail = process.env.REACT_APP_DEMO_EMAIL;
  const demoPassword = process.env.REACT_APP_DEMO_PASSWORD;

  const handleUserLogin = async (formData) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch(setCurrentUser(user.user.displayName, user.user.uid));
      dispatch(setShowLoginModal(false));
    } catch (error) {
      let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
      dispatch(setError(errorMessage));
    }
  };

  const handleDemoLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        demoEmail,
        demoPassword
      );
      dispatch(setCurrentUser(user.user.displayName, user.user.uid));
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
      <Button
        type="button"
        text="Demo Login"
        className={styles.demoLoginButton}
        onClick={handleDemoLogin}
      />
    </form>
  );
};

export default LoginForm;
