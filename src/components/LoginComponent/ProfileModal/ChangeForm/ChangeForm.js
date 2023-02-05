import useForm from "../../../../hooks/useForm";
import {
  passwordFormValidation,
  emailFormValidation,
} from "../../../utils/ValidationRules";
import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import styles from "./ChangeForm.module.scss";
import { auth } from "../../../../Firebase";
import { updatePassword, updateEmail } from "firebase/auth";
import ErrorMessages from "../../../utils/ErrorMessages";
import { setError } from "../../../../actions/Actions";
import { useDispatch } from "react-redux";
import ErrorDisplay from "../../../UI/ErrorDisplay/ErrorDisplay";

const ChangeForm = (props) => {
  const dispatch = useDispatch();

  const handleChangeForm = (formData) => {
    const user = auth.currentUser;

    formData.formType === "email"
      ? updateEmail(user, formData.email)
      : updatePassword(user, formData.password)
          .then(() => {
            props.closeModal();
          })
          .catch((error) => {
            let ErrorDisplay =
              ErrorMessages[error.code] || ErrorMessages.default;
            dispatch(setError(ErrorDisplay));
          });
  };

  const { formData, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "", confirmPassword: "", formType: props.formType },
    props.formType === "email" ? emailFormValidation : passwordFormValidation,
    handleChangeForm
  );

  const { email, password, confirmPassword } = formData;

  return (
    <Modal className={styles.changeFormModal}>
      <form onSubmit={handleSubmit} className={styles.changeForm}>
        {props.formType === "email" && (
          <>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrorDisplay errorText={errors.email} />
          </>
        )}
        {props.formType === "password" && (
          <>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrorDisplay errorText={errors.password} />

            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              autoComplete="off"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrorDisplay errorText={errors.confirmPassword} />
          </>
        )}
        <div className={styles.buttonContainer}>
          <Button type="submit" text="Submit" onSubmit={handleSubmit} />
          <Button type="button" text="Close" onClick={props.closeModal} />
        </div>
      </form>
    </Modal>
  );
};

export default ChangeForm;
