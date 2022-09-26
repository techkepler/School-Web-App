import React from "react";

const ParentSection = ({ requestData, handleChange }) => {
  return (
    <div className="guardian-information w-full md:w-[80%] lg:w-[70%] xl:w-[60%]">
      <h1 className="my-4 text-2xl text-blue-900">
        Parent / Guardian Information
      </h1>
      <div className="realtion-to-student my-6">
        <h1 className="pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span>
          Relation to Student{" "}
        </h1>
        <select
          className="form-select relative w-full py-2 rounded-sm px-2"
          onChange={handleChange}
          name="relation"
          value={requestData.relation}
        >
          <option>-Please Choose-</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Sister">Sister</option>
          <option value="Brother">Brother</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="prefix my-6">
        <h1 className="pb-2">
          <span className="text-red-600 text-2xl pr-2">*</span>
          Prefix
        </h1>
        <select
          className="form-select relative w-full py-2 rounded-sm px-2"
          onChange={handleChange}
          name="prefix"
          value={requestData.prefix}
        >
          <option>-Please Choose-</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
          <option value="Dr.">Dr.</option>
        </select>
      </div>

      <div className="guradian-full-name my-6">
        <label htmlFor="guardianName" className="pb-2 block">
          <span className="text-red-600 text-2xl pr-2">*</span>Full Name
        </label>
        <input
          type="text"
          className="form-input w-full py-2 rounded-sm px-2"
          id="guardianName"
          name="guardian_name"
          onChange={handleChange}
          value={requestData.guardian_name}
        />
      </div>

      <div className="guardian-email my-6">
        <label htmlFor="email" className="pb-2 block">
          <span className="text-red-600 text-2xl pr-2">*</span>Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={requestData.email}
          className="form-input w-full py-2 rounded-sm px-2"
        />
      </div>

      <div className="phone-number my-4">
        <label htmlFor="phone" className="pb-2 block">
          <span className="text-red-600 text-2xl pr-2">*</span> Cell Phone
          Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone_number"
          onChange={handleChange}
          value={requestData.phone_number}
          className="form-input w-full py-2 rounded-sm px-2"
        />
      </div>
    </div>
  );
};

export default ParentSection;
