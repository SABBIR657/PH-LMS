import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("user");

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

const getData = async (url, queryParams) => {
  const headers = token ? { Authorization: `${token}` } : {};
  const response = await Axios.get(url, {
    params: queryParams,
    headers: headers,
  });
  console.log(response.data);
  return response.data;
};
const postData = async (url, data) => {
  const headers = token ? { Authorization: `${token}` } : {};
  console.log(headers);
  try {
    const response = await Axios.post(url, data, {
      headers: headers,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};
const updateData = async (url, data) => {
  const headers = token ? { Authorization: `${token}` } : {};
  try {
    const response = await Axios.patch(url, data, { headers: headers });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};
const deleteData = async (url) => {
  const headers = token ? { Authorization: `${token}` } : {};
  const response = await Axios.delete(url, { headers: headers });
  return response.data;
};
const addToCart = async (data, url) => {
  const headers = token ? { Authorization: `${token}` } : {};
  try {
    const response = await postData(url || "/cart/add", data, {
      headers: headers,
    });
    console.log("Product added to cart:", response);
    return response;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export { Axios, getData, postData, updateData, deleteData, addToCart };
