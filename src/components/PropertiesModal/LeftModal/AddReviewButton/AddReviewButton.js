import { useDispatch, useSelector } from "react-redux";
import {
  setModalName,
  setShowAddReview,
} from "../../../../actions/ModalActions";
import Button from "../../../UI/Button/Button";
import styles from "./AddReviewButton.module.scss";

const AddReviewButton = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userReducer.name);
  return (
    <>
      {name && (
        <Button
          type="button"
          text="Add Review"
          className={styles.reviewButton}
          onClick={() => {
            dispatch(setShowAddReview(true));
            dispatch(setModalName("review"));
          }}
        />
      )}
    </>
  );
};

export default AddReviewButton;
