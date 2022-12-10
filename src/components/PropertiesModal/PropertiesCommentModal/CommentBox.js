import ModalCommentCard from "./ModalCommentCard";
import styles from "./CommentBox.module.scss";

const CommentBox = (props) => {
  return (
    <div className={`${styles.commentBox} ${props.className}`}>
      <ModalCommentCard />
    </div>
  );
};

export default CommentBox;
