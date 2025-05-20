const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const checkField = (fields) => {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(fields.email.trim())) {
    errors.email = "Invalid email format";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required";
  }

  return Object.keys(errors).length === 0 ? true : errors;
};
