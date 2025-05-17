import axios from "axios";

export const postForm = async (formData) => {
  const data = {
    service_id: "service_kg7th03",
    template_id: "template_8y8pzcy",
    user_id: "iVWhWUcmXVbS_RzOv",
    template_params: {
      ...formData,
    },
  };
  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to send message. Please try again later.");
  }
};
