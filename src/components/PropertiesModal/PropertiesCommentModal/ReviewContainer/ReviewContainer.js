import { useSelector } from "react-redux";
import ReviewCard from "../../../UI/ReviewCard/ReviewCard";
import AddReviewButton from "../../LeftModal/AddReviewButton/AddReviewButton";
import styles from "./ReviewContainer.module.scss";

const ReviewContainer = () => {
  const currentPropertyData = useSelector(
    (state) => state.propertyReducer.current_property_data
  );
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsInnerContainer}>
        {currentPropertyData.reviews &&
          Object.entries(currentPropertyData.reviews).map(([key, review]) => {
            return <ReviewCard review={review} key={key} />;
          })}
      </div>
      <AddReviewButton className={styles.addReviewButton} />
    </div>
  );
};

export default ReviewContainer;
