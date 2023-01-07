import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPropertyData,
  setError,
  setLoading,
  setPropertiesUpdated,
  setShowAddComment,
} from "../../../actions/Actions";
import { CurrentDate } from "../../utils/CurrentDate";
import Button from "../../UI/Button/Button";
import styles from "./AddCommentComponent.module.scss";

const AddCommentComponent = () => {
  const [error, setError] = useState("");
  const textRef = useRef("");
  const dispatch = useDispatch();
  const currentProperty = useSelector((state) => state.current_property);
  const currentUser = useSelector((state) => state.current_user);
  const currentUserId = useSelector((state) => state.current_user_id);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (textRef.current.value.length < 20) {
      setError("Please enter a review with at least 20 characters");
      return;
    }

    dispatch(setLoading(true));

    const { month, date, year } = CurrentDate();
    const currentDate = month + "/" + date + "/" + year;

    const comment = {
      text: textRef.current.value,
      user: currentUser,
      id: currentUserId,
      date: currentDate,
    };
    textRef.current.value = "";

    handleUpdateData(comment);
  };

  const handleUpdateData = async (comment) => {
    try {
      await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${currentProperty}/comments.json`,
        {
          method: "POST",
          body: JSON.stringify(comment),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
      fetchUpdatedData();
    }
  };

  const fetchUpdatedData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${currentProperty}.json`
      );
      const json = await response.json();
      dispatch(setCurrentPropertyData(json));
      dispatch(setPropertiesUpdated(true));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div className={styles.addComment}>
      <h1>Add your Review</h1>
      <form className={styles.commentBox} onSubmit={handleAddComment}>
        <label>Your Review:</label>
        <textarea
          type="text"
          rows="5"
          placeholder="Write your review..."
          className={error && styles.errorBorder}
          ref={textRef}
        ></textarea>
        <span className={styles.error}>{error}</span>
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            text="Close"
            className={styles.commentButton}
            onClick={() => dispatch(setShowAddComment(false))}
          />
          <Button
            type="Submit"
            text="Add Review"
            className={styles.commentButton}
            onClick={handleAddComment}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCommentComponent;
