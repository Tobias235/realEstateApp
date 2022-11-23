import LeftModal from "../PropertiesComponent/PropertiesModalComponent/LeftModal/LeftModal";
import RightModal from "../PropertiesComponent/PropertiesModalComponent/RightModal/RightModal";
import AddCommentComponent from "../PropertiesComponent/PropertiesModalComponent/PropertiesCommentModal/AddCommentComponent";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PropertiesModal.module.scss";
import { setShowDetails } from "../../actions/Actions";

const PropertiesModal = ({ onClose }) => {
  const addComments = useSelector((state) => state.show_comment);
  const dispatch = useDispatch();

  const handleCloseDetails = () => {
    dispatch(setShowDetails(false));
  };

  return (
    <div className={styles.propertiesModal}>
      {!addComments && <LeftModal />}
      {!addComments && <RightModal onClose={handleCloseDetails} />}
      {addComments && <AddCommentComponent />}
    </div>
  );
};

export default PropertiesModal;
