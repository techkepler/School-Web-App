import React from "react";

const HouseHold = ({ requestData, handleChange }) => {
  return (
    <div className="household-information w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-2xl mb-4 text-blue-900"> Household Information</h1>
      <div className="city my-6">
        <label htmlFor="city" className="pb-2 block">
          <span className="text-red-600 text-2xl pr-2">*</span> City
        </label>
        <input
          type="text"
          className="form-input relative w-full py-2 rounded-sm px-2"
          name="city"
          id="city"
          onChange={handleChange}
          value={requestData.city}
        />
      </div>
      <div className="province my-6">
        <h1 className="pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span>
          Province
        </h1>
        <select
          className="form-select relative w-full py-2 rounded-sm px-2"
          name="province"
          onChange={handleChange}
          value={requestData.province}
        >
          <option>-Please Choose-</option>
          <option value="nursery">Sudurpaschim</option>
          <option value="Karnali">Karnali</option>
          <option value="Lumbini">Lumbini</option>
          <option value="Gandaki">Gandaki</option>
          <option value="Bagmati">Bagmati</option>
          <option value="Madesh">Madesh</option>
          <option value="Province 1">Province 1</option>
        </select>
      </div>
      <div className="home-phone-number my-4">
        <label htmlFor="homePhn" className="block pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span>Home Phone
        </label>
        <input
          type="tel"
          id="homePhn"
          className="form-input relative w-full py-2 rounded-sm px-2"
          name="home_phone"
          onChange={handleChange}
          value={requestData.home_phone}
        />
      </div>
    </div>
  );
};

export default HouseHold;
