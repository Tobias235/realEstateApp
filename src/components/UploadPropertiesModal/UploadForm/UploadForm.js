import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Firebase";
import { resizeFile } from "../../utils/ImageConverter";
import Button from "../../UI/Button/Button";
import styles from "./UploadForm.module.scss";
import { setLoading, setUploadingStatus } from "../../../actions/Actions";
import { useDispatch } from "react-redux";

const initialState = {
  bedrooms: "",
  bathrooms: "",
  size: "",
  price: "",
  location: "",
  description: "",
};

const UploadForm = () => {
  const [images, setImages] = useState([]);
  const [property, setProperty] = useState(initialState);
  const dispatch = useDispatch();

  const handleImageSelect = async (e) => {
    dispatch(setLoading(true));
    let imageArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      imageArray.push(await resizeFile(newImage));
      setImages(imageArray);
      dispatch(
        setUploadingStatus(
          `${imageArray.length} out of ${e.target.files.length} images done`
        )
      );
      if (imageArray.length === e.target.files.length)
        dispatch(setLoading(false));
    }
  };

  const handleUploadImages = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setUploadingStatus(`Uploading Property To Database`));
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
      "https://realestate-38717-default-rtdb.europe-west1.firebasedatabase.app/properties.json",
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
      setProperty(initialState);
      setImages([]);
      dispatch(setLoading(false));
    }
  };

  const selectedImages =
    images.length > 0 ? `${images.length} Images Selected` : "Choose Images";

  return (
    <>
      {property && (
        <form className={styles.inputContainer} onSubmit={handleUploadImages}>
          <label>Bedrooms:</label>
          <input
            type="number"
            placeholder="Bedrooms"
            min="0"
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
            min="0"
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
            min="0"
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
            min="0"
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
            {selectedImages}
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

export default UploadForm;
