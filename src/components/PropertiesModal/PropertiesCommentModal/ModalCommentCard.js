import { useSelector } from "react-redux";
import styles from "./ModalCommentCard.module.scss";

const ModalCommentCard = () => {
  const currentPropertyData = useSelector(
    (state) => state.current_property_data
  );

  return (
    <>
      {currentPropertyData.comments &&
        Object.entries(currentPropertyData.comments).map(([key, comment]) => {
          return (
            <div className={styles.commentCard} key={key}>
              <p>
                {comment.text}
                <span>By: {comment.user}</span>
              </p>
            </div>
          );
        })}
    </>
  );
};

export default ModalCommentCard;
