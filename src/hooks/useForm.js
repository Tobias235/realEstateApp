import { useState } from "react";

const useForm = (initialValues, validationRules, callback) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(validationRules).forEach(
      ([fieldName, validationFunction]) => {
        if (validationFunction(formData[fieldName])) {
          newErrors[fieldName] = validationFunction(formData[fieldName]);
        }
      }
    );
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (!Object.keys(validationErrors).length) {
      callback(formData, setFormData(initialValues));
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
