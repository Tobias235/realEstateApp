import { useSelector } from "react-redux";
import Button from "../../../UI/Button/Button";
import styles from "./DeleteProperty.module.scss";

const DeleteProperty = () => {
  const { current_property, current_property_data } = useSelector(
    (state) => state.propertyReducer
  );

  const id = useSelector((state) => state.userReducer.id);

  const handleDeleteProperty = async () => {
    try {
      await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}properties/${current_property}.json`,
        {
          method: "DELETE",
        }
      );
      console.log("Property deleted successfully.");
    } catch (error) {
      console.log("Property deletion failed");
    }
  };
  return (
    <>
      {current_property_data.uid === id && (
        <Button
          type="button"
          text="delete property"
          className={styles.deleteButton}
          onClick={handleDeleteProperty}
        />
      )}
    </>
  );
};

export default DeleteProperty;
