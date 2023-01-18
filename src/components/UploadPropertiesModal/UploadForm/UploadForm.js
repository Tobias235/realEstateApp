import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
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
import { uploadPropertyValidation } from "../../utils/ValidationRules";
const initialState = {
  propertyType: "",
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
  const currentPropertyId = useSelector((state) => state.current_property);
  const currentProperty = useSelector((state) => state.current_property_data);
  const propertiesUpdate = useSelector((state) => state.properties_update);
  const dispatch = useDispatch();

  const handleImageSelect = async (e) => {
    dispatch(setLoading(true));
    let imageArray = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      imageArray.push(await resizeFile(newImage));
      dispatch(
        setUploadingStatus(
          `${imageArray.length} out of ${e.target.files.length} images done`
        )
      );
      if (imageArray.length === e.target.files.length) {
        dispatch(setLoading(false));
        handleChange({
          target: { name: "images", value: [...images, ...imageArray] },
        });
      }
    }
  };

  const handleUploadProperty = async (e) => {
    dispatch(setLoading(true));
    dispatch(setUploadingStatus(`Uploading Property To Database`));
    let propertyObj = {};

    if (formData.images.length === 0) return uploadData(formData);

    const urls = [];
    for (const image of images) {
      console.log(image, images);
      const storageRef = ref(storage, image.name);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      urls.push(url);
    }

    currentProperty?.images?.length > 0
      ? (propertyObj = {
          ...formData,
          images: [...currentProperty.images, ...urls],
        })
      : (propertyObj = {
          ...formData,
          images: [...urls],
        });

    uploadData(propertyObj);
  };

  const uploadData = async (property) => {
    console.log("test");
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

  const { formData, errors, handleChange, handleSubmit } = useForm(
    currentProperty ? currentProperty : initialState,
    uploadPropertyValidation,
    handleUploadProperty
  );

  const {
    propertyType,
    bedrooms,
    bathrooms,
    size,
    price,
    city,
    state,
    description,
    images,
  } = formData;

  console.log(formData);
  console.log(errors);

  const selectedImages =
    formData?.images?.length > 0
      ? `${formData?.images?.length} Images Selected`
      : "Choose Images";

  console.log(formData);
  return (
    <>
      {formData && (
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
          <label>Property Type:</label>
          <input
            type="text"
            placeholder="Property type"
            name="propertyType"
            value={propertyType}
            onChange={(e) => handleChange(e)}
          />
          <label>Bedrooms:</label>
          <input
            type="number"
            placeholder="Bedrooms"
            name="bedrooms"
            min="0"
            value={bedrooms}
            onChange={(e) => handleChange(e)}
          />
          <label>Bathrooms:</label>
          <input
            type="number"
            placeholder="Bathrooms"
            name="bathrooms"
            min="0"
            value={bathrooms}
            onChange={(e) => handleChange(e)}
          />
          <label>Size:</label>
          <input
            type="number"
            placeholder="Size"
            name="size"
            min="0"
            value={size}
            onChange={(e) => handleChange(e)}
          />
          <label>Price:</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            min="0"
            value={price}
            onChange={(e) => handleChange(e)}
          />
          <label>City:</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            className={styles.capitalize}
            onChange={(e) => handleChange(e)}
          />
          <label>State:</label>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={state}
            className={styles.capitalize}
            onChange={(e) => handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            type="text"
            rows="5"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="file-upload" className={styles.uploadImage}>
            {selectedImages}
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            name="images"
            files={images}
            className={styles.uploadFileInput}
            onChange={handleImageSelect}
          />
          <Button
            type="submit"
            text="Upload"
            className={styles.adminPropertiesButton}
            onSubmit={handleSubmit}
          />
        </form>
      )}
    </>
  );
};

export default UploadForm;
