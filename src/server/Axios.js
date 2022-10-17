import axios from "axios";
const baseURL = "https://techkepler.com/api/";

export const axiosAdmin = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});
