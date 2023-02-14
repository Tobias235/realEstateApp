export const loginValidation = {
  email: (value) =>
    !/\S+@\S+\.\S+/.test(value)
      ? "Please enter a valid email address."
      : undefined,
  password: (value) =>
    value.length < 8
      ? "Please enter a password with at least 8 characters."
      : undefined,
};

export const signupValidation = {
  name: (value) => (value.length < 2 ? "Please enter your name." : undefined),
  email: (value) =>
    !/\S+@\S+\.\S+/.test(value)
      ? "Please enter a valid email address."
      : undefined,
  password: (value) =>
    value.length < 8
      ? "Please enter a password with at least 8 characters."
      : undefined,
};

export const contactValidation = {
  from_name: (value) =>
    !value || value.length < 3 ? "Please enter your name." : undefined,
  reply_to: (value) =>
    !/\S+@\S+\.\S+/.test(value)
      ? "Please enter a valid email address."
      : undefined,
  subject: (value) => (!value ? "Please enter a subject." : undefined),
  message: (value) =>
    value.length < 19
      ? "Please enter a message with at least 19 characters."
      : undefined,
};

export const addReviewValidation = {
  rating: (value) => (!value ? "Please select a rating." : undefined),
  review: (value) =>
    value.length < 19
      ? "Please enter a review with at least 20 characters."
      : undefined,
};

export const uploadPropertyValidation = {
  propertyType: (value) =>
    !value ? "Please enter a property type." : undefined,
  bedrooms: (value) =>
    !value ? "Please enter the number of bedrooms." : undefined,
  bathrooms: (value) =>
    !value ? "Please enter the number of bathrooms." : undefined,
  size: (value) =>
    !value ? "Please enter the size of the property." : undefined,
  price: (value) =>
    !value ? "Please enter the price of the property." : undefined,
  city: (value) => (!value ? "Please enter the city." : undefined),
  state: (value) => (!value ? "Please enter the state." : undefined),
  description: (value) => (!value ? "Please enter a description." : undefined),
  images: (value) =>
    !value.length ? "Please select images to upload." : undefined,
};

export const passwordFormValidation = {
  password: (value) =>
    value.length < 8
      ? "Please enter a password with at least 8 characters."
      : undefined,
  confirmPassword: (value, formData) =>
    value !== formData.password
      ? "Passwords do not match. Please try again."
      : undefined,
};

export const emailFormValidation = {
  email: (value) =>
    !/\S+@\S+\.\S+/.test(value)
      ? "Please enter a valid email address."
      : undefined,
};
