import axiosInstance from "../../../../Api/axiosInstance";

const LogOut = () => {
  const logout = async () => {
    try {
      await axiosInstance.get("user/logout/", {
        withCredentials: true,
      });
    } catch (error) {}
  };
  return logout;
};

export default LogOut;
