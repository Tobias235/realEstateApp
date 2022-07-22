import styles from "./PropertiesModalContainer.module.scss";
import LeftModal from "../components/PropertiesComponent/PropertiesModalComponent/LeftModal";
import RightModal from "../components/PropertiesComponent/PropertiesModalComponent/RightModal";

const PropertiesModalContainer = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <LeftModal />
      <RightModal onClose={onClose} />
    </div>
  );
};

export default PropertiesModalContainer;
