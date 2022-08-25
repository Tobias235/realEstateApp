import styles from "./PropertiesModalContainer.module.scss";
import LeftModal from "../components/PropertiesComponent/PropertiesModalComponent/LeftModal";
import RightModal from "../components/PropertiesComponent/PropertiesModalComponent/RightModal";
import AddCommentComponent from "../components/PropertiesComponent/PropertiesModalComponent/PropertiesCommentModal/AddCommentComponent";
import { useSelector } from "react-redux";

const PropertiesModalContainer = ({ onClose }) => {
  const addComments = useSelector((state) => state.show_comment);

  return (
    <div className={styles.modal}>
      {!addComments && <LeftModal />}
      {!addComments && <RightModal onClose={onClose} />}
      {addComments && <AddCommentComponent />}
    </div>
  );
};

export default PropertiesModalContainer;
