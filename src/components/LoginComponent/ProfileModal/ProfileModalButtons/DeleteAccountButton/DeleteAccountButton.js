import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setError } from "../../../../../actions/Actions";
import { auth } from "../../../../../Firebase";
import Backdrop from "../../../../UI/Backdrop/Backdrop";
import Button from "../../../../UI/Button/Button";
import Modal from "../../../../UI/Modal/Modal";
import ErrorMessages from "../../../../utils/ErrorMessages";
import styles from "./DeleteAccountButton.module.scss";

const DeleteAccountButton = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDeleteAccount = () => {
    auth.currentUser
      .delete()
      .then(function () {
        setShowSuccess(true);
        dispatch(setCurrentUser(null));
        setTimeout(() => setShowPopup(false), 1000);
      })
      .catch(function (error) {
        let errorMessage = ErrorMessages[error.code] || ErrorMessages.default;
        dispatch(setError(errorMessage));
      });
  };

  return (
    <>
      <Button text="delete account" onClick={() => setShowPopup(true)} />
      {showPopup && (
        <Modal className={styles.popupContainer}>
          {!showSuccess && (
            <h3>Are you sure you want to delete your account?</h3>
          )}
          {showSuccess ? (
            <p>User has been deleted</p>
          ) : (
            <>
              <Button text="Confirm" onClick={handleDeleteAccount} />
              <Button text="Close" onClick={() => setShowPopup(false)} />
            </>
          )}
        </Modal>
      )}
      {showPopup && (
        <Backdrop
          className={styles.backdrop}
          onClick={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default DeleteAccountButton;
