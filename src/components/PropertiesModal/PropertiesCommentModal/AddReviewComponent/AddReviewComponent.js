import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPropertyData,
  setLoading,
  setError,
  setPropertiesUpdated,
  setShowAddComment,
  setRating,
  setModalName,
} from "../../../../actions/Actions";
import { CurrentDate } from "../../../utils/CurrentDate";
import Button from "../../../UI/Button/Button";
import styles from "./AddReviewComponent.module.scss";
import StarRating from "../StarRating/StarRating";

const AddReviewComponent = () => {
  const [errorText, setErrorText] = useState("");
  const textRef = useRef("");
  const dispatch = useDispatch();
  const currentProperty = useSelector((state) => state.current_property);
  const currentUser = useSelector((state) => state.current_user);
  const currentUserId = useSelector((state) => state.current_user_id);
  const rating = useSelector((state) => state.rating);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (textRef.current.value.length < 20) {
      setErrorText("Please enter a review with at least 20 characters");
      return;
    }
    errorText && setErrorText("");

    dispatch(setLoading(true));

    const { month, date, year } = CurrentDate();
    const currentDate = month + "/" + date + "/" + year;

    const review = {
      text: textRef.current.value,
      user: currentUser,
      id: currentUserId,
      date: currentDate,
      rating: rating,
    };
    textRef.current.value = "";
    dispatch(setRating(null));

    handleUpdateData(review);
  };

  const handleUpdateData = async (review) => {
    try {
      await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${currentProperty}/comments.json`,
        {
          method: "POST",
          body: JSON.stringify(review),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
      dispatch(setShowAddComment(false));
      dispatch(setModalName("details"));
      dispatch(setRating(null));
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
    <div className={styles.addReview}>
      <h1>Add your Review</h1>
      <StarRating />
      <form className={styles.reviewInput} onSubmit={handleAddReview}>
        <label>Your Review:</label>
        <textarea
          type="text"
          rows="7"
          placeholder="Write your review..."
          className={errorText && styles.errorBorder}
          ref={textRef}
        ></textarea>
        {errorText && <span className={styles.error}>{errorText}</span>}
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            text="Close"
            className={styles.reviewButton}
            onClick={() => {
              dispatch(setShowAddComment(false));
              dispatch(setModalName("details"));
              dispatch(setRating(null));
            }}
          />
          <Button
            type="Submit"
            text="Submit"
            className={styles.reviewButton}
            onClick={handleAddReview}
          />
        </div>
      </form>
    </div>
  );
};

export default AddReviewComponent;
