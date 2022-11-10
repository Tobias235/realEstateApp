import { useState } from "react";
import Button from "../../utils/Button/Button";
import styles from "./AdminPropertiesModal.module.scss";

const AdminPropertiesModal = () => {
  const [property, setProperty] = useState({
    bedrooms: "",
    bathrooms: "",
    size: "",
    price: "",
    description: "",
  });
  const handleUploadProperty = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://realestate-c158b-default-rtdb.asia-southeast1.firebasedatabase.app/properties.json",
      {
        method: "POST",
        body: JSON.stringify(property),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  const propertyValues = Object.values(property).some((value) => value === "");

  return (
    <div className={styles.adminModalContainer}>
      <div className={styles.adminPropertiesModal}>
        <h1>Add/Update Properties</h1>
        <form className={styles.inputContainer} onSubmit={handleUploadProperty}>
          <label>Bedrooms</label>
          <input
            type="number"
            placeholder="Bedrooms"
            onChange={(e) =>
              setProperty({
                ...property,
                bedrooms: e.target.value,
              })
            }
          />
          <label>Bathrooms</label>
          <input
            type="number"
            placeholder="Bathrooms"
            onChange={(e) =>
              setProperty({
                ...property,
                bathrooms: e.target.value,
              })
            }
          />
          <label>Size</label>
          <input
            type="number"
            placeholder="Size"
            onChange={(e) =>
              setProperty({
                ...property,
                size: e.target.value,
              })
            }
          />
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) =>
              setProperty({
                ...property,
                price: e.target.value,
              })
            }
          />
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            onChange={(e) =>
              setProperty({
                ...property,
                location: e.target.value,
              })
            }
          />
          <label>Description</label>
          <textarea
            type="text"
            rows="5"
            placeholder="Description"
            onChange={(e) =>
              setProperty({
                ...property,
                description: e.target.value,
              })
            }
          />
          <Button
            type="submit"
            text="Upload"
            className={styles.adminPropertiesButton}
            disabled={propertyValues}
            onClick={handleUploadProperty}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminPropertiesModal;
