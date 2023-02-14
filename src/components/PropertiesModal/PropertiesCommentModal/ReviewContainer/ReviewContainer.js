import { useSelector } from "react-redux";
import ReviewCard from "../../../UI/ReviewCard/ReviewCard";
import styles from "./ReviewContainer.module.scss";

const ReviewContainer = () => {
  const currentPropertyData = useSelector(
    (state) => state.propertyReducer.current_property_data
  );
  return (
    <div className={styles.reviewContainer}>
      {currentPropertyData.reviews &&
        Object.entries(currentPropertyData.reviews).map(([key, review]) => {
          return <ReviewCard review={review} key={key} />;
        })}
    </div>
  );
};

export default ReviewContainer;
