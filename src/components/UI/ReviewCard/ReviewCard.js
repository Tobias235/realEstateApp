import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.reviewCard}>
      <p>{review.review}</p>
      <span className={styles.reviewUser}>
        By: {review.user} <br /> {review.date}
      </span>
    </div>
  );
};

export default ReviewCard;
