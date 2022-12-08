import LeftModal from "./LeftModal/LeftModal";
import RightModal from "./RightModal/RightModal";
import AddCommentComponent from "../PropertiesModal/PropertiesCommentModal/AddCommentComponent";
import { useSelector } from "react-redux";
import styles from "./PropertiesModal.module.scss";

const PropertiesModal = () => {
  const addComments = useSelector((state) => state.show_comment);

  return (
    <div className={styles.propertiesModal}>
      {!addComments && <LeftModal />}
      {!addComments && <RightModal />}
      {addComments && <AddCommentComponent />}
    </div>
  );
};

export default PropertiesModal;
