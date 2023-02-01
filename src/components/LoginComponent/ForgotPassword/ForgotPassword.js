import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../Firebase";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
import ErrorDisplay from "../../UI/ErrorDisplay/ErrorDisplay";
import Modal from "../../UI/Modal/Modal";
import ErrorMessages from "../../utils/ErrorMessages";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordResetSent, setPasswordResetSent] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setPasswordResetSent(true);
      setError("");
      setEmail("");
    } catch (error) {
      let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
      setError(errorMessage);
    }
  };

  const handleCloseModal = () => {
    setShowForgotPassword(false);
    setEmail("");
    setError("");
  };

  return (
    <>
      <span onClick={() => setShowForgotPassword(true)}>Forgot Password?</span>

      {showForgotPassword && (
        <Modal className={styles.forgotPasswordModal}>
          {passwordResetSent ? (
            <div className={styles.forgotPasswordContainer}>
              Password reset email sent. Please check your email.
              <Button text="Close" onClick={handleCloseModal} />
            </div>
          ) : (
            <div className={styles.forgotPasswordContainer}>
              <p>Enter your email to receive a password reset link:</p>
              <label>
                Email:
                <input
                  type="email"
                  className={error && styles.error}
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <ErrorDisplay errorText={error} />
              <Button text="Reset Password" onClick={handleForgotPassword} />
            </div>
          )}
        </Modal>
      )}

      {showForgotPassword && (
        <Backdrop className={styles.backdrop} onClick={handleCloseModal} />
      )}
    </>
  );
};

export default ForgotPassword;
