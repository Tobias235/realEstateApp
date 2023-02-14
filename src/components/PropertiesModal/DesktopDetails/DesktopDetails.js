import LeftModal from "../LeftModal/LeftModal";
import RightModal from "../RightModal/RightModal";
import AddReviewComponent from "../../PropertiesModal/PropertiesCommentModal/AddReviewComponent/AddReviewComponent";
import { useSelector } from "react-redux";
import styles from "./DesktopDetails.module.scss";

const DesktopDetails = (props) => {
  const addReviews = useSelector((state) => state.modalReducer.show_review);

  const detailsReviewStyling = addReviews
    ? styles.addReview
    : styles.propertiesModal;

  return (
    <div className={`${detailsReviewStyling} ${props.className}`}>
      {!addReviews && <LeftModal />}
      {!addReviews && <RightModal />}
      {addReviews && <AddReviewComponent />}
    </div>
  );
};

export default DesktopDetails;
