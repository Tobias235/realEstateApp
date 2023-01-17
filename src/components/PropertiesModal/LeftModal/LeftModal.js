import { useDispatch, useSelector } from "react-redux";
import { setModalName, setShowAddComment } from "../../../actions/Actions";
import ModalGallery from "../ModalGallery/ModalGallery";
import Button from "../../UI/Button/Button";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import styles from "./LeftModal.module.scss";

const LeftModal = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  return (
    <div className={styles.leftModal}>
      <ModalGallery />
      <ReviewContainer />
      {name && (
        <Button
          type="button"
          text="Add Review"
          className={styles.reviewButton}
          onClick={() => {
            dispatch(setShowAddComment(true));
            dispatch(setModalName("comment"));
          }}
        />
      )}
    </div>
  );
};

export default LeftModal;
