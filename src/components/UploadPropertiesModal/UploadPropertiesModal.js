import styles from "./UploadPropertiesModal.module.scss";
import UploadForm from "./UploadForm/UploadForm";

const UploadPropertiesModal = () => {
  return (
    <div className={styles.adminPropertiesModal}>
      <h1>Add/Update Properties</h1>
      <UploadForm />
    </div>
  );
};

export default UploadPropertiesModal;
