import axios from "axios";

export const axiosJWT = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

axiosJWT.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default instance;
