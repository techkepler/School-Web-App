import React from "react";

import { Link } from "react-router-dom";

const AdditonalForm = ({ handleChange, requestData, handleFormSubmit }) => {
  return (
    <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
      {" "}
      <div className="additional-information">
        <h1 className="text-2xl text-blue-900 my-6">Additional Information</h1>
        <div className="hear-about">
          <h1 className="pb-2"> How did you hear about the school? </h1>
          <select
            className="form-select w-full py-2 rounded-sm px-2"
            onChange={handleChange}
            value={requestData.hear_about_school}
            name="hear_about_school"
          >
            <option>-Please Choose-</option>
            <option value="relative">Relative attend the school</option>
            <option value="advertisement">Advertisement</option>
            <option value="mouth">Word of Mouth</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="additonal-questions my-6">
          <h1 className="pb-2">
            {" "}
            Please enter any additional questions or comments.{" "}
          </h1>
          <textarea
            className="form-textarea w-full"
            cols="30"
            rows="5"
            name="additional_query"
            onChange={handleChange}
            value={requestData.additional_query}
          ></textarea>
        </div>
      </div>
      <div className="submit-btn mb-5">
        <button
          type="submit"
          className="mx-4 bg-green-500 py-2 px-4 rounded-md "
          onClick={handleFormSubmit}
          disabled={
            requestData.student_name.length < 1 ||
            requestData.date_of_birth.length < 1 ||
            requestData.city.length < 1 ||
            requestData.province.length < 1 ||
            requestData.email.length < 1 ||
            requestData.entering_grade.length < 1 ||
            requestData.gender.length < 1 ||
            requestData.guardian_name.length < 1 ||
            requestData.relation.length < 1 ||
            requestData.prefix.length < 1 ||
            requestData.phone_number.length < 1 ||
            requestData.home_phone.length < 1 ||
            requestData.year_applying.length < 1
          }
        >
          Submit
        </button>
        <Link to="/" className="mx-4 bg-red-500 py-2 px-4 rounded-md ">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AdditonalForm;
