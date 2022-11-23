import styles from "./AdminPropertiesModal.module.scss";
import AdminForm from "./AdminForm/AdminForm";

const AdminPropertiesModal = () => {
  return (
    <div className={styles.adminPropertiesModal}>
      <h1>Add/Update Properties</h1>
      <AdminForm />
    </div>
  );
};

export default AdminPropertiesModal;
