import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/GlobalProvider";
import axiosInstance from "../Api/axiosInstance";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const refresh = async () => {
    try {
      const response = await axiosInstance.post("users/refresh/token/", {
        withCredentials: true,
      });
      const userResponse = await axiosInstance.get("users/information/");
      setAuth((prev) => {
        return {
          ...prev,
          token: response.data.access,
          role: userResponse.data.role,
          name: userResponse.data.name,
          category: userResponse.data.category,
          uid: userResponse.data.uid,
        };
      });
      return response.data.access;
    } catch (error) {
      localStorage.clear();
      navigate("/login/", { state: { from: location }, replace: true });
    }
  };
  return refresh;
};

export default useRefreshToken;
