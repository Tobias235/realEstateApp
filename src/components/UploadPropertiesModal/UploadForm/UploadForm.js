import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../../Firebase";
import { resizeFile } from "../../utils/ImageConverter";
import { uploadPropertyValidation } from "../../utils/ValidationRules";
import {
  setError,
  setLoading,
  setModalName,
  setPropertiesUpdated,
  setShowDetails,
  setShowUploadPropertiesModal,
  setUploadingStatus,
} from "../../../actions/Actions";
import Button from "../../UI/Button/Button";
import ErrorDisplay from "../../UI/ErrorDisplay/ErrorDisplay";
import ErrorMessages from "../../utils/ErrorMessages";
import styles from "./UploadForm.module.scss";

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
    const urls = [];
    let propertyObj = {};
    const userUid = auth.currentUser.uid;

    const newImages = images.filter(
      (image) => !currentProperty?.images.includes(image)
    );

    for (const image of newImages) {
      const storageRef = ref(storage, `users/${userUid}/${image.name}`);
      await uploadBytes(storageRef, image, userUid);
      const url = await getDownloadURL(storageRef, userUid);
      urls.push(url);
    }

    currentProperty?.images?.length > 0
      ? (propertyObj = {
          ...formData,
          images: [...currentProperty.images, ...urls],
          uid: userUid,
        })
      : (propertyObj = {
          ...formData,
          images: urls,
          uid: userUid,
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
        dispatch(setLoading(false));
        if (currentProperty) {
          dispatch(setPropertiesUpdated(!propertiesUpdate));
          dispatch(setShowUploadPropertiesModal(false));
        }
      }
    } catch (error) {
      let ErrorDisplay = ErrorMessages[error.code] || ErrorMessages.default;
      dispatch(setError(ErrorDisplay));
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

  const selectedImages =
    images?.length > 0
      ? `${formData?.images?.length} Images Selected`
      : "Choose Images";

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
            className={errors.propertyType && styles.errorBorder}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.propertyType} />

          <label>Bedrooms:</label>
          <input
            type="number"
            placeholder="Bedrooms"
            name="bedrooms"
            min="0"
            value={bedrooms}
            className={errors.bedrooms && styles.errorBorder}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.bedrooms} />

          <label>Bathrooms:</label>
          <input
            type="number"
            placeholder="Bathrooms"
            name="bathrooms"
            min="0"
            value={bathrooms}
            className={errors.bathrooms && styles.errorBorder}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.bathrooms} />

          <label>Size:</label>
          <input
            type="number"
            placeholder="Size"
            name="size"
            min="0"
            value={size}
            className={errors.size && styles.errorBorder}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.size} />

          <label>Price:</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            min="0"
            value={price}
            className={errors.price && styles.errorBorder}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.price} />

          <label>City:</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            className={`${styles.capitalize} ${
              errors.city && styles.errorBorder
            }`}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.city} />

          <label>State:</label>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={state}
            className={`${styles.capitalize} ${
              errors.state && styles.errorBorder
            }`}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.state} />

          <label>Description:</label>
          <textarea
            className={errors.description && styles.errorBorder}
            type="text"
            rows="5"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
          />
          <ErrorDisplay errorText={errors.description} />

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
          <ErrorDisplay errorText={errors.images} />

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
