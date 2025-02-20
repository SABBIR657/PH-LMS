import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_Backend_Url,
  withCredentials: true,
});

const getData = async (url, queryParams) => {
  const response = await Axios.get(url, { params: queryParams });
  console.log(response.data);
  return response.data;
};
const postData = async (url, data) => {
  try {
    const response = await Axios.post(url, data);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};
const updateData = async (url, data) => {
  try {
    const response = await Axios.patch(url, data);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};
const deleteData = async (url) => {
  const response = await Axios.delete(url);
  return response.data;
};
const addToCart = async (data, url) => {
  try {
    const response = await postData(url || "/cart/add", data);
    console.log("Product added to cart:", response);
    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export { Axios, getData, postData, updateData, deleteData, addToCart };