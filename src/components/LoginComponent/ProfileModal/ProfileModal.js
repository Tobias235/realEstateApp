import { useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
import styles from "./ProfileModal.module.scss";
import DeleteAccountButton from "./ProfileModalButtons/DeleteAccountButton/DeleteAccountButton";
import ChangeForm from "./UpdateProfileForms/ChangeForm/ChangeForm";
import PastReviews from "./ProfileModalButtons/PastReviews/PastReviews";

const ProfileModal = () => {
  const [formType, setFormType] = useState("");
  const [showReviews, setShowReviews] = useState(false);

  const user = useSelector((state) => state.name);

  const closeModal = () => {
    setFormType("");
  };

  return (
    <div className={styles.profileModal}>
      <h1>Welcome, {user}</h1>
      <Button text="reviews" onClick={() => setShowReviews(true)} />
      <Button
        type="button"
        text="change email"
        onClick={() => setFormType("email")}
      />
      <Button
        type="button"
        text="change password"
        onClick={() => setFormType("password")}
      />
      <DeleteAccountButton />

      {formType !== "" && (
        <Backdrop className={styles.backDrop}>
          <ChangeForm formType={formType} closeModal={closeModal} />
        </Backdrop>
      )}

      {showReviews && (
        <Backdrop className={styles.backDrop}>
          <PastReviews />
        </Backdrop>
      )}
    </div>
  );
};

export default ProfileModal;
