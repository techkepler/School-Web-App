import React from "react";
import ReactDOM from "react-dom/client";
import GlobalProvider from "./contexts/GlobalProvider";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);

reportWebVitals();
