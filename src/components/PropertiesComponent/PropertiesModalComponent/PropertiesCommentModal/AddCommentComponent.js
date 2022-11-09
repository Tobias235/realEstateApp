import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setShowAddComment } from "../../../../actions/Actions";
import Button from "../../../utils/Button/Button";
import CommentBox from "./CommentBox";
import styles from "./AddCommentComponent.module.scss";

const AddCommentComponent = () => {
  const dispatch = useDispatch();
  const textRef = useRef("");

  const handleCloseComment = () => {
    dispatch(setShowAddComment(false));
  };

  const handleAddComment = (e) => {
    console.log(e.target.reset);
    console.log(textRef.current.value);
    textRef.current.value = "";
  };

  return (
    <div className={styles.addComment}>
      <h1>Add your comment</h1>
      <CommentBox className={styles.comments} />
      <form className={styles.textForm}>
        <label>Your comment:</label>
        <textarea
          type="text"
          rows="5"
          placeholder="Write your comment..."
          ref={textRef}
        ></textarea>
      </form>
      <div className={styles.buttonContainer}>
        <Button
          text="Close"
          className={styles.closeButton}
          onClick={handleCloseComment}
        />
        <Button
          type="Submit"
          text="Add Comment"
          className={styles.closeButton}
          onClick={handleAddComment}
        />
      </div>
    </div>
  );
};

export default AddCommentComponent;
