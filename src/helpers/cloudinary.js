import axios from "axios";

const cloudinary = {
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_SECRET,
};
const imageUpload = async (file) => {
  if (file.type.match("image.*")) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_chat_images");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinary.cloud_name}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.secure_url);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
const pdfUpload = async (file) => {
  if (file.type === "application/pdf") {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_chat_pdfs");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinary.cloud_name}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.secure_url);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
export { cloudinary, imageUpload, pdfUpload };