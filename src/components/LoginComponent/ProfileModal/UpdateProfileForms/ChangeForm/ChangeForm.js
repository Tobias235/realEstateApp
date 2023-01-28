// import { useState } from "react";
import useForm from "../../../../../hooks/useForm";
import { changeFormValidation } from "../../../../utils/ValidationRules";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Button/Button";
import styles from "./ChangeForm.module.scss";

const ChangeForm = (props) => {
  const handleChangeForm = () => {};

  const { formData, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "", confirmPassword: "" },
    changeFormValidation,
    handleChangeForm
  );

  const { email, password, confirmPassword } = formData;

  console.log(errors);

  return (
    <Modal className={styles.formModal}>
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
          </>
        )}
        {props.formType === "password" && (
          <>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </>
        )}
        <div>
          <Button type="submit" text="Submit" />
          <Button type="button" text="Close" onClick={props.closeModal} />
        </div>
      </form>
    </Modal>
  );
};

export default ChangeForm;
