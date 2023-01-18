import { useSelector } from "react-redux";
import styles from "./ModalCommentCard.module.scss";

const ModalCommentCard = () => {
  const currentPropertyData = useSelector(
    (state) => state.current_property_data
  );

  return (
    <>
      {currentPropertyData.reviews &&
        Object.entries(currentPropertyData.reviews).map(([key, review]) => {
          return (
            <div className={styles.commentCard} key={key}>
              <p>{review.review}</p>
              <span className={styles.reviewUser}>
                By: {review.user} <br /> {review.date}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default ModalCommentCard;
