import useForm from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPropertyData,
  setLoading,
  setError,
  setPropertiesUpdated,
  setShowAddComment,
  setModalName,
} from "../../../../actions/Actions";
import { CurrentDate } from "../../../utils/CurrentDate";
import { addReviewValidation } from "../../../utils/ValidationRules";
import StarRating from "../StarRating/StarRating";
import ReviewButton from "./ReviewButton/ReviewButton";
import ErrorDisplay from "../../../UI/ErrorDisplay/ErrorDisplay";
import styles from "./AddReviewComponent.module.scss";
import { auth } from "../../../../Firebase";

const AddReviewComponent = () => {
  const dispatch = useDispatch();
  const currentProperty = useSelector((state) => state.current_property);
  const name = useSelector((state) => state.name);

  const handleAddReview = () => {
    dispatch(setLoading(true));

    const { month, date, year } = CurrentDate();
    const currentDate = month + "/" + date + "/" + year;

    const userUid = auth.currentUser.uid;

    const review = {
      review: formData.review,
      rating: formData.rating,
      user: name,
      uid: userUid,
      date: currentDate,
    };

    handleUpdateData(review);
  };

  const handleUpdateData = async (review) => {
    try {
      await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${currentProperty}/reviews.json`,
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

  const { formData, errors, handleChange, handleSubmit } = useForm(
    { review: "", rating: null },
    addReviewValidation,
    handleAddReview
  );

  const { review, rating } = formData;

  return (
    <div className={styles.addReview}>
      <h1>Add your Review</h1>
      <StarRating
        isHoverable={true}
        isClickable={true}
        starRating={rating}
        onClick={(i) => {
          handleChange({ target: { name: "rating", value: i } });
        }}
      />
      <ErrorDisplay errorText={errors.rating} />

      <form className={styles.reviewInput} onSubmit={handleSubmit}>
        <label>Your Review:</label>
        <textarea
          type="text"
          rows="7"
          placeholder="Write your review..."
          name="review"
          className={errors.review && styles.errorBorder}
          value={review}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <ErrorDisplay errorText={errors.review} />
      </form>
      <ReviewButton
        onClick={handleSubmit}
        onClose={() => {
          dispatch(setShowAddComment(false));
          dispatch(setModalName("details"));
        }}
      />
    </div>
  );
};

export default AddReviewComponent;
