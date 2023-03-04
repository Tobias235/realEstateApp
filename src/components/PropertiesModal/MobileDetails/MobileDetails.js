import { useSelector } from "react-redux";
import ModalDescription from "../ModalDescription/ModalDescription";
import ModalGallery from "../ModalGallery/ModalGallery";
import AddReviewComponent from "../PropertiesCommentModal/AddReviewComponent/AddReviewComponent";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import CloseDetailsButton from "../RightModal/CloseDetailsButton/CloseDetailsButton";
import DeleteProperty from "../RightModal/DeleteProperty/DeleteProperty";
import styles from "./MobileDetails.module.scss";

const MobileDetails = (props) => {
  const addReviews = useSelector((state) => state.modalReducer.show_review);

  return (
    <div className={props.className}>
      {addReviews && <AddReviewComponent />}
      {!addReviews && (
        <div className={styles.mobileDetailsContainer}>
          <ModalGallery />
          <ModalDescription />
          <ReviewContainer />
          <div className={styles.buttonContainer}>
            <CloseDetailsButton />
            <DeleteProperty />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDetails;
