import { useSelector } from "react-redux";
import AddReviewButton from "../LeftModal/AddReviewButton/AddReviewButton";
import ModalDescription from "../ModalDescription/ModalDescription";
import ModalGallery from "../ModalGallery/ModalGallery";
import AddReviewComponent from "../PropertiesCommentModal/AddReviewComponent/AddReviewComponent";
import ReviewContainer from "../PropertiesCommentModal/ReviewContainer/ReviewContainer";
import CloseDetailsButton from "../RightModal/CloseDetailsButton/CloseDetailsButton";
import styles from "./MobileDetails.module.scss";

const MobileDetails = () => {
  const addComments = useSelector((state) => state.show_comment);

  return addComments ? (
    <> {addComments && <AddReviewComponent />}</>
  ) : (
    <div className={styles.mobileDetailsContainer}>
      <ModalGallery />
      <ModalDescription />
      <ReviewContainer />
      <div className={styles.buttonContainer}>
        <AddReviewButton />
        <CloseDetailsButton />
      </div>
    </div>
  );
};

export default MobileDetails;
