import React from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  const navigate = useNavigate();
  let goBack = () => navigate(-1);

  return (
    <div className="text-gray-400  text-5xl text-center h-[100vh] overflow-y-auto bg-[#0b0f19]">
      <p className="mt-10">UnAuthorized</p>
      <div className="w-full mt-10 flex flex-col justify-center items-center  text-black">
        <button
          onClick={goBack}
          className="bg-green-500 px-2 py-2 rounded-md  text-lg "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnAuthorized;
