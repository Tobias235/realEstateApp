import { useDispatch, useSelector } from "react-redux";
import { setShowAddComment } from "../../../actions/Actions";
import ModalGallery from "../../PropertiesComponent/PropertiesModalComponent/ModalGallery";
import Button from "../../utils/Button";
import CommentBox from "./PropertiesCommentModal/CommentBox";
import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  const dispatch = useDispatch();
  const login_status = useSelector((state) => state.login_status);

  const handleComment = () => {
    dispatch(setShowAddComment(true));
  };
  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <CommentBox />
      {login_status && (
        <Button
          type="button"
          text="Add Comment"
          className={styles.commentButton}
          onClick={handleComment}
        />
      )}
    </div>
  );
};

export default LeftModal;
