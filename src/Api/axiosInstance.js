import axios from "axios";
const baseURL = "https://techkepler.com/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
