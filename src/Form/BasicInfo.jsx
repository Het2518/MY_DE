// src/Form/BasicInfo.jsx
import React from "react";

const BasicInfo = ({ basicInfo, setBasicInfo }) => {
  const handleChange = (e) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Basic Information</h3>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="dob"
        placeholder="DOB"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Address"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default BasicInfo;
