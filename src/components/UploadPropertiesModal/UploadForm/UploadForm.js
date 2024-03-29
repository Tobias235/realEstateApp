import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../../Firebase";
import { resizeFile } from "../../utils/ImageConverter";
import { uploadPropertyValidation } from "../../utils/ValidationRules";
import Button from "../../UI/Button/Button";
import ErrorDisplay from "../../UI/ErrorDisplay/ErrorDisplay";
import ErrorMessages from "../../utils/ErrorMessages";
import {
  setError,
  setLoading,
  setUploadingStatus,
} from "../../../actions/LoadingActions";
import { setPropertiesUpdated } from "../../../actions/PropertyActions";
import {
  setModalName,
  setShowUploadPropertiesModal,
} from "../../../actions/ModalActions";

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
  const currentPropertyId = useSelector(
    (state) => state.propertyReducer.current_property
  );
  const currentProperty = useSelector(
    (state) => state.propertyReducer.current_property_data
  );
  const propertiesUpdate = useSelector(
    (state) => state.propertyReducer.properties_update
  );
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
    const urls = [];
    let propertyObj = {};
    const userUid = auth.currentUser?.uid;

    if (!userUid) {
      dispatch(
        setError(
          "You must be logged in to upload a property. Please log in or create an account to continue."
        )
      );
      dispatch(setShowUploadPropertiesModal(false));
      dispatch(setModalName(""));
      return;
    }
    dispatch(setLoading(true));
    dispatch(setUploadingStatus(`Uploading Property To Database`));

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
      dispatch(setLoading(false));
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
          <div className={styles.row}>
            <label>
              Property Type:
              <input
                type="text"
                name="propertyType"
                value={propertyType}
                className={errors.propertyType && styles.errorBorder}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.propertyType} />
            </label>

            <label>
              Price:
              <input
                type="number"
                name="price"
                min="0"
                value={price}
                className={errors.price && styles.errorBorder}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.price} />
            </label>
          </div>

          <div className={styles.row}>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={city}
                className={`${styles.capitalize} ${
                  errors.city && styles.errorBorder
                }`}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.city} />
            </label>

            <label>
              State:
              <input
                type="text"
                name="state"
                value={state}
                className={`${styles.capitalize} ${
                  errors.state && styles.errorBorder
                }`}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.state} />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.triple}>
              Bedrooms:
              <input
                type="number"
                name="bedrooms"
                min="0"
                value={bedrooms}
                className={errors.bedrooms && styles.errorBorder}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.bedrooms} />
            </label>
            <label className={styles.triple}>
              Bathrooms:
              <input
                type="number"
                name="bathrooms"
                min="0"
                value={bathrooms}
                className={errors.bathrooms && styles.errorBorder}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.bathrooms} />
            </label>

            <label className={styles.triple}>
              Size:
              <input
                type="number"
                name="size"
                min="0"
                value={size}
                className={errors.size && styles.errorBorder}
                onChange={(e) => handleChange(e)}
              />
              <ErrorDisplay errorText={errors.size} />
            </label>
          </div>

          <label>
            Description:
            <textarea
              className={errors.description && styles.errorBorder}
              type="text"
              rows="5"
              name="description"
              value={description}
              onChange={(e) => handleChange(e)}
            />
            <ErrorDisplay errorText={errors.description} />
          </label>

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
