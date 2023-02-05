import LeftModal from "../LeftModal/LeftModal";
import RightModal from "../RightModal/RightModal";
import AddReviewComponent from "../../PropertiesModal/PropertiesCommentModal/AddReviewComponent/AddReviewComponent";
import { useSelector } from "react-redux";
import styles from "./DesktopDetails.module.scss";

const DesktopDetails = (props) => {
  const addComments = useSelector((state) => state.show_comment);

  const detailsReviewStyling = addComments
    ? styles.addReview
    : styles.propertiesModal;

  return (
    <div className={`${detailsReviewStyling} ${props.className}`}>
      {!addComments && <LeftModal />}
      {!addComments && <RightModal />}
      {addComments && <AddReviewComponent />}
    </div>
  );
};

export default DesktopDetails;
