import { useDispatch } from "react-redux";
import { setShowAddComment } from "../../../actions/Actions";
import ModalGallery from "../../PropertiesComponent/PropertiesModalComponent/ModalGallery";
import Button from "../../utils/Button";
import styles from "./LeftModal.module.scss";
import CommentBox from "./PropertiesCommentModal/CommentBox";

const LeftModal = () => {
  const dispatch = useDispatch();

  const handleComment = () => {
    dispatch(setShowAddComment(true));
  };
  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <CommentBox />
      <Button
        type="button"
        text="Add Comment"
        className={styles.commentButton}
        onClick={handleComment}
      />
    </div>
  );
};

export default LeftModal;
