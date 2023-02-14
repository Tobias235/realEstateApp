import { useSelector } from "react-redux";
import { auth } from "../../../../../Firebase";
import Button from "../../../../UI/Button/Button";
import Modal from "../../../../UI/Modal/Modal";
import ReviewCard from "../../../../UI/ReviewCard/ReviewCard";
import styles from "./PastReviews.module.scss";

const PastReviews = (props) => {
  const properties = useSelector((state) => state.propertyReducer.properties);

  const userUID = auth.currentUser.uid;

  const propertyValues = Object.values(properties);

  const reviews = [].concat(
    ...propertyValues.map((property) => {
      if (!property.reviews) {
        return [];
      }
      return Object.values(property.reviews).filter(
        (review) => review.uid === userUID
      );
    })
  );

  return (
    <Modal className={styles.pastReviewsContainer}>
      <h1>Your reviews</h1>
      <div className={styles.reviewsContainer}>
        {reviews.map((review, i) => {
          return <ReviewCard review={review} key={i} />;
        })}
      </div>
      <Button type="button" text="Close" onClick={props.closeModal} />
    </Modal>
  );
};

export default PastReviews;
