import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../Firebase";
import { resizeFile } from "../../../utils/ImageConverter";
import Button from "../../../UI/Button/Button";
import styles from "./AdminForm.module.scss";

const initialState = {
  bedrooms: "",
  bathrooms: "",
  size: "",
  price: "",
  location: "",
  description: "",
};

const AdminForm = () => {
  const [images, setImages] = useState([]);
  const [property, setProperty] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = async (e) => {
    setIsLoading(true);
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      const image = await resizeFile(newImage);
      console.log(image);
      setImages((prevState) => [...prevState, image]);
    }
    setIsLoading(false);
  };

  const handleUploadImages = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let urls = [];
    let propertyObj = {};
    images.forEach((image) => {
      const storageRef = ref(storage, image.name);
      uploadBytes(storageRef, image).then(() => {
        getDownloadURL(storageRef).then((url) => {
          urls.push(url);
          if (images.length === urls.length) {
            propertyObj = { ...property, images: [...urls] };
            uploadData(propertyObj);
          }
        });
      });
    });
  };

  const uploadData = async (propertyObj) => {
    const response = await fetch(
      "https://realestate-c158b-default-rtdb.asia-southeast1.firebasedatabase.app/properties.json",
      {
        method: "POST",
        body: JSON.stringify(propertyObj),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data) {
      setIsLoading(false);
      setProperty(initialState);
      setImages([]);
    }
  };

  return (
    <>
      {isLoading && <p>Page is loading, please wait.</p>}
      {property && (
        <form className={styles.inputContainer} onSubmit={handleUploadImages}>
          <label>Bedrooms:</label>
          <input
            type="number"
            placeholder="Bedrooms"
            value={property.bedrooms}
            onChange={(e) =>
              setProperty({
                ...property,
                bedrooms: e.target.value,
              })
            }
          />
          <label>Bathrooms:</label>
          <input
            type="number"
            placeholder="Bathrooms"
            value={property.bathrooms}
            onChange={(e) =>
              setProperty({
                ...property,
                bathrooms: e.target.value,
              })
            }
          />
          <label>Size:</label>
          <input
            type="number"
            placeholder="Size"
            value={property.size}
            onChange={(e) =>
              setProperty({
                ...property,
                size: e.target.value,
              })
            }
          />
          <label>Price:</label>
          <input
            type="number"
            placeholder="Price"
            value={property.price}
            onChange={(e) =>
              setProperty({
                ...property,
                price: e.target.value,
              })
            }
          />
          <label>Location:</label>
          <input
            type="text"
            placeholder="Location"
            value={property.location}
            onChange={(e) =>
              setProperty({
                ...property,
                location: e.target.value,
              })
            }
          />
          <label>Description:</label>
          <textarea
            type="text"
            rows="5"
            placeholder="Description"
            value={property.description}
            onChange={(e) =>
              setProperty({
                ...property,
                description: e.target.value,
              })
            }
          />
          <label htmlFor="file-upload" className={styles.uploadImage}>
            Choose Images
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            className={styles.uploadFileInput}
            onChange={handleImageSelect}
          />
          <Button
            type="submit"
            text="Upload"
            className={styles.adminPropertiesButton}
            onClick={handleUploadImages}
          />
        </form>
      )}
    </>
  );
};

export default AdminForm;
