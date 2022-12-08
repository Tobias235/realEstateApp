import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setShowAddComment } from "../../../actions/Actions";
import Button from "../../UI/Button/Button";
import CommentBox from "./CommentBox";
import styles from "./AddCommentComponent.module.scss";

const AddCommentComponent = () => {
  const dispatch = useDispatch();
  const textRef = useRef("");

  const handleCloseComment = () => {
    dispatch(setShowAddComment(false));
  };

  const handleAddComment = (e) => {
    console.log(textRef.current.value);
    textRef.current.value = "";
  };

  return (
    <div className={styles.addComment}>
      <h1>Add your comment</h1>
      <CommentBox className={styles.comments} />
      <div className={styles.commentBox}>
        <label>Your comment:</label>
        <textarea
          type="text"
          rows="5"
          placeholder="Write your comment..."
          ref={textRef}
        ></textarea>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          text="Close"
          className={styles.commentButton}
          onClick={handleCloseComment}
        />
        <Button
          type="Submit"
          text="Add Comment"
          className={styles.commentButton}
          onClick={handleAddComment}
        />
      </div>
    </div>
  );
};

export default AddCommentComponent;
