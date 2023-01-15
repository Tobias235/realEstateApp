import { useState } from "react";

const useForm = (initialValues, validationRules, callback) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name);
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (!Object.keys(errors).length) {
      callback(formData);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useForm;
