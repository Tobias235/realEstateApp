import { useDispatch } from "react-redux";
import { setShowAddComment } from "../../../../actions/Actions";
import Button from "../../../utils/Button";
import styles from "./AddCommentComponent.module.scss";
import CommentBox from "./CommentBox";
const AddCommentComponent = () => {
  const dispatch = useDispatch();

  const handleCloseComment = () => {
    dispatch(setShowAddComment(false));
  };

  return (
    <div className={styles.addComment}>
      <h1>Add your comment</h1>
      <CommentBox className={styles.comments} />
      <textarea rows="6"></textarea>
      <Button
        text="Close"
        className={styles.closeButton}
        onClick={handleCloseComment}
      />
    </div>
  );
};

export default AddCommentComponent;
