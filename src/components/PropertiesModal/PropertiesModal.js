import LeftModal from "../PropertiesComponent/PropertiesModalComponent/LeftModal/LeftModal";
import RightModal from "../PropertiesComponent/PropertiesModalComponent/RightModal/RightModal";
import AddCommentComponent from "../PropertiesComponent/PropertiesModalComponent/PropertiesCommentModal/AddCommentComponent";
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