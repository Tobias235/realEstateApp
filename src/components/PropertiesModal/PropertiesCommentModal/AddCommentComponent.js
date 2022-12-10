import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPropertyData,
  setError,
  setLoading,
  setPropertiesUpdated,
  setShowAddComment,
} from "../../../actions/Actions";
import Button from "../../UI/Button/Button";
import CommentBox from "./CommentBox";
import styles from "./AddCommentComponent.module.scss";

const AddCommentComponent = () => {
  const textRef = useRef("");
  const dispatch = useDispatch();
  const currentProperty = useSelector((state) => state.current_property);
  const currentUser = useSelector((state) => state.current_user);

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const comment = {
      text: textRef.current.value,
      user: currentUser,
    };
    textRef.current.value = "";

    handleUpdateData(comment);
  };

  const handleUpdateData = async (comment) => {
    try {
      await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${currentProperty}/comments.json`,
        {
          method: "POST",
          body: JSON.stringify(comment),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
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

  return (
    <div className={styles.addComment}>
      <h1>Add your comment</h1>
      <CommentBox className={styles.comments} />
      <form className={styles.commentBox} onSubmit={handleAddComment}>
        <label>Your comment:</label>
        <textarea
          type="text"
          rows="5"
          placeholder="Write your comment..."
          ref={textRef}
        ></textarea>
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            text="Close"
            className={styles.commentButton}
            onClick={() => dispatch(setShowAddComment(false))}
          />
          <Button
            type="Submit"
            text="Add Comment"
            className={styles.commentButton}
            onClick={handleAddComment}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCommentComponent;
