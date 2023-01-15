export const contactValidation = {
  name: (value) => (value.length < 5 ? "Please enter your name." : undefined),
  email: (value) =>
    !/\S+@\S+\.\S+/.test(value)
      ? "Please enter a valid e-mail address."
      : undefined,
  subject: (value) => (!value ? "Please enter a subject." : undefined),
  message: (value) =>
    value.length < 19
      ? "Please enter a message with at least 19 characters."
      : undefined,
};
