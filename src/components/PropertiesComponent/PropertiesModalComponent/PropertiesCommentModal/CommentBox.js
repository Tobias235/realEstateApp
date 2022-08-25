import styles from "./CommentBox.module.scss";

import ModalCommentCard from "./ModalCommentCard";

const CommentBox = (props) => {
  return (
    <div className={`${styles.commentBox} ${props.className}`}>
      <ModalCommentCard />
      <ModalCommentCard />
      <ModalCommentCard />
    </div>
  );
};

export default CommentBox;
