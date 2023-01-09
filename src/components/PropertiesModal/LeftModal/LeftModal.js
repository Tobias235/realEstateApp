import { useDispatch, useSelector } from "react-redux";
import { setShowAddComment } from "../../../actions/Actions";
import ModalGallery from "../ModalGallery/ModalGallery";
import Button from "../../UI/Button/Button";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  const dispatch = useDispatch();
  const login_status = useSelector((state) => state.login_status);

  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <ReviewContainer />
      {login_status && (
        <Button
          type="button"
          text="Add Review"
          className={styles.reviewButton}
          onClick={() => dispatch(setShowAddComment(true))}
        />
      )}
    </div>
  );
};

export default LeftModal;
