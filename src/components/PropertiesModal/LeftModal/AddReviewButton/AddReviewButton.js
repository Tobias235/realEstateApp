import { useDispatch, useSelector } from "react-redux";
import { setModalName, setShowAddComment } from "../../../../actions/Actions";
import Button from "../../../UI/Button/Button";
import styles from "./AddReviewButton.module.scss";

const AddReviewButton = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  return (
    <>
      {name && (
        <Button
          type="button"
          text="Add Review"
          className={styles.reviewButton}
          onClick={() => {
            dispatch(setShowAddComment(true));
            dispatch(setModalName("comment"));
          }}
        />
      )}
    </>
  );
};

export default AddReviewButton;
