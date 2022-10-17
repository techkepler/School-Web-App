import axios from "axios";
const baseURL = "https://techkepler.com/api/";

const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosPublic;
