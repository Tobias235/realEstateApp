import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Firebase";
import { resizeFile } from "../../utils/ImageConverter";
import Button from "../../UI/Button/Button";
import styles from "./UploadForm.module.scss";
import {
  setLoading,
  setPropertiesUpdated,
  setShowDetails,
  setShowUploadPropertiesModal,
  setUploadingStatus,
} from "../../../actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  bedrooms: "",
  bathrooms: "",
  size: "",
  price: "",
  city: "",
  state: "",
  description: "",
  images: [],
};

const UploadForm = () => {
  const [images, setImages] = useState([]);
  const [property, setProperty] = useState(initialState);
  const currentPropertyId = useSelector((state) => state.current_property);
  const currentProperty = useSelector((state) => state.current_property_data);
  const propertiesUpdate = useSelector((state) => state.properties_update);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProperty) return setProperty(currentProperty);

    setProperty(initialState);
  }, [currentProperty]);

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

  const handleUploadProperty = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setUploadingStatus(`Uploading Property To Database`));
    let propertyObj = {};

    if (images.length === 0) return uploadData(property);

    const urls = [];
    for (const image of images) {
      const storageRef = ref(storage, image.name);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      urls.push(url);
    }

    currentProperty?.images?.length > 0
      ? (propertyObj = {
          ...property,
          images: [...currentProperty.images, ...urls],
        })
      : (propertyObj = {
          ...property,
          images: [...urls],
        });

    uploadData(propertyObj);
  };

  const uploadData = async (property) => {
    try {
      const updateProperty = currentProperty
        ? `properties/${currentPropertyId}.json`
        : `properties.json`;
      const newOrUpdate = currentProperty ? "PUT" : "POST";
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}${updateProperty}`,
        {
          method: `${newOrUpdate}`,
          body: JSON.stringify(property),
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
        if (currentProperty) {
          dispatch(setPropertiesUpdated(!propertiesUpdate));
          dispatch(setShowUploadPropertiesModal(false));
          dispatch(setShowDetails(true));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const selectedImages =
    images.length + property.images.length > 0
      ? `${images.length + property.images.length} Images Selected`
      : "Choose Images";

  return (
    <>
      {property && (
        <form className={styles.inputContainer} onSubmit={handleUploadProperty}>
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
          <label>City:</label>
          <input
            type="text"
            placeholder="City"
            value={property.city}
            onChange={(e) =>
              setProperty({
                ...property,
                city: e.target.value,
              })
            }
          />
          <label>State:</label>
          <input
            type="text"
            placeholder="State"
            value={property.state}
            onChange={(e) =>
              setProperty({
                ...property,
                state: e.target.value,
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
            files={property.images}
            className={styles.uploadFileInput}
            onChange={handleImageSelect}
          />
          <Button
            type="submit"
            text="Upload"
            className={styles.adminPropertiesButton}
            onClick={handleUploadProperty}
          />
        </form>
      )}
    </>
  );
};

export default UploadForm;
