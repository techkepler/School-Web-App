import { createContext, useState, useContext } from "react";

export const AuthProvider = createContext();

const GlobalProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    role: [],
    name: "",
    email: "",
    uid: "",
    category: "",
    grade: "",
    status: false,
  });

  const [currentLocation, setCurrentLocation] = useState("Home");
  const [isSideBar, setIsSideBar] = useState(false);
  const [isColorBar, setIsColorBar] = useState(false);
  const [themeColor, setThemeColor] = useState("#9bbae7");
  const [colorMode, setColorMode] = useState("Dark");
  const [screenSize, setScreenSize] = useState(undefined);
  const [isNotification, setIsNotification] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [isLinkActive, setIsLinkActive] = useState("dashboard");
  return (
    <AuthProvider.Provider
      value={{
        auth,
        setAuth,
        isSideBar,
        setIsSideBar,
        isColorBar,
        setIsColorBar,
        themeColor,
        setThemeColor,
        colorMode,
        setColorMode,
        screenSize,
        setScreenSize,
        isNotification,
        setIsNotification,
        isMessage,
        setIsMessage,
        currentLocation,
        setCurrentLocation,
        isLinkActive,
        setIsLinkActive,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(AuthProvider);
};
