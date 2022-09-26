import React from "react";
import "./zsekleton.css";
import { PageNotFoundImg } from "../Assets/export/ExportImg";

const Skeleton = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[100vh] bg-img"
        style={{ backgroundImage: `url(${PageNotFoundImg})` }}
      ></div>
    </div>
  );
};

export default Skeleton;
