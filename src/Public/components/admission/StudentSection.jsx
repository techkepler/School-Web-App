import React from "react";

const StudentSection = ({ requestData, handleChange }) => {
  return (
    <div className="student-information-section w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-2xl text-blue-900 mb-5">Student Information</h1>
      <div className="name">
        <label htmlFor="name" className="block mb-2">
          <span className="text-red-600 text-2xl">*</span> Full Name
        </label>
        <input
          type="text"
          className="form-input py-2 relative w-full rounded-sm px-2"
          name="student_name"
          id="name"
          onChange={handleChange}
          value={requestData.student_name}
        />
      </div>
      <div className="gender my-4">
        <h1 className="mb-1">
          <span className="text-red-600 text-2xl pr-2">*</span>
          Gender
        </h1>
        <div className="male pb-2 px-2">
          <input
            name="gender"
            type="radio"
            id="male"
            value="male"
            onChange={handleChange}
            checked={requestData.gender === "male"}
            className="form-radio"
          />
          <label className="px-2" htmlFor="male">
            Male
          </label>
        </div>

        <div className="female px-2">
          <input
            name="gender"
            type="radio"
            id="female"
            value="female"
            onChange={handleChange}
            checked={requestData.gender === "female"}
            className="form-radio"
          />
          <label className="px-2" htmlFor="female">
            Female
          </label>
        </div>
      </div>

      <div className="date-of-birth my-6">
        <label htmlFor="date_of_birth" className="block pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span> Date of Birth
        </label>
        <input
          type="date"
          name="date_of_birth"
          id="date_of_birth"
          value={requestData.date_of_birth}
          onChange={handleChange}
          className="relative w-full py-2 rounded-sm px-2"
        />
      </div>

      <div className="entering-grade my-6">
        <h1 className="pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span> Entering Grade
        </h1>
        <select
          className="form-select relative w-full py-2 rounded-sm px-2"
          name="entering_grade"
          onChange={handleChange}
          value={requestData.entering_grade}
        >
          <option value="choose one">-Please Choose-</option>
          <option value="Nursery">Nursery</option>
          <option value="L.K.G">L.K.G</option>
          <option value="U.K.G">U.K.G</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
          <option value="Five">Five</option>
          <option value="Six">Six</option>
          <option value="Seven">Seven</option>
          <option value="Eight">Eight</option>
          <option value="Nine">Nine</option>
          <option value="Ten">Ten</option>
          <option value="Eleven">Eleven</option>
          <option value="Twelve">Twelve</option>
        </select>
      </div>

      <div className="year-applying my-6">
        <h1 className="pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span> Year Applying
        </h1>
        <select
          className="form-select relative w-full py-2 rounded-sm px-2"
          name="year_applying"
          onChange={handleChange}
          value={requestData.year_applying}
        >
          <option>-Please Choose-</option>
          <option value="202.-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
          <option value="2025-2026">2025-2026</option>
        </select>
      </div>

      <div className="current-school my-4">
        <label htmlFor="current_school" className="block pb-2">
          Current School
        </label>
        <input
          type="text"
          id="current_school"
          className="form-input relative w-full py-2 rounded-sm px-2"
          onChange={handleChange}
          name="current_school"
          value={requestData.current_school}
        />
      </div>
    </div>
  );
};

export default StudentSection;
