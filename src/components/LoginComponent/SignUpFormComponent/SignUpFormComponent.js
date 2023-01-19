import useForm from "../../../hooks/useForm";
import { signupValidation } from "../../utils/ValidationRules";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase";
import { setError, setShowLoginModal } from "../../../actions/Actions";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import ErrorMessages from "../../utils/ErrorMessages";
import ErrorDisplay from "../../UI/ErrorDisplay/ErrorDisplay";
import styles from "./SignUpFormComponent.module.scss";

const SignUpFormComponent = () => {
  const dispatch = useDispatch();

  const handleUserRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      console.log(user);
      dispatch(setShowLoginModal(false));
    } catch (error) {
      let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
      dispatch(setError(errorMessage));
    }
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "" },
    signupValidation,
    handleUserRegister
  );

  const { name, email, password } = formData;

  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name:"
        name="name"
        autoComplete="off"
        value={name}
        className={errors.name ? styles.error : null}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <ErrorDisplay errorText={errors.name} />

      <label>Email:</label>
      <input
        type="email"
        placeholder="Email:"
        name="email"
        autoComplete="off"
        value={email}
        className={errors.email ? styles.error : null}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <ErrorDisplay errorText={errors.email} />

      <label>Password:</label>
      <input
        type="password"
        placeholder="Password:"
        autoComplete="off"
        name="password"
        value={password}
        className={errors.password ? styles.error : null}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <ErrorDisplay errorText={errors.password} />

      <Button
        type="submit"
        className={styles.registerButton}
        text="Register"
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default SignUpFormComponent;
