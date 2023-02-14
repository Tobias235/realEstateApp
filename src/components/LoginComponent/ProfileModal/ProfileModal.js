import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalName,
  setShowProfile,
  setShowUploadPropertiesModal,
} from "../../../actions/ModalActions";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";
import DeleteAccountButton from "./ProfileModalButtons/DeleteAccountButton/DeleteAccountButton";
import ChangeForm from "./ChangeForm/ChangeForm";
import PastReviews from "./ProfileModalButtons/PastReviews/PastReviews";
import styles from "./ProfileModal.module.scss";

const ProfileModal = () => {
  const [formType, setFormType] = useState("");
  const [showReviews, setShowReviews] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.name);

  const closeModal = () => {
    setFormType("");
    setShowReviews(false);
  };

  return (
    <div className={styles.profileModal}>
      <h1>Welcome, {user}</h1>
      <Button
        type="button"
        text="upload properties"
        onClick={() => {
          dispatch(setShowUploadPropertiesModal(true));
          dispatch(setShowProfile(false));
          dispatch(setModalName("upload"));
        }}
      >
        Upload Properties
      </Button>
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
      <Button
        text="close"
        onClick={() => {
          dispatch(setShowProfile(false));
          dispatch(setModalName(null));
        }}
      />

      {(showReviews || formType !== "") && (
        <Backdrop
          className={styles.profileBackdrop}
          onClick={closeModal}
        ></Backdrop>
      )}

      {formType !== "" && (
        <ChangeForm formType={formType} closeModal={closeModal} />
      )}

      {showReviews && <PastReviews closeModal={closeModal} />}
    </div>
  );
};

export default ProfileModal;
