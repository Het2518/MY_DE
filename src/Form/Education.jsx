// src/Form/Education.jsx
import React from "react";

const Education = ({ education, setEducation }) => {
  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Education</h3>
      <input
        type="text"
        name="instituteName"
        placeholder="Institute Name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="fieldOfStudy"
        placeholder="Field of Study"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="Start Date"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="percentageCGPA"
        placeholder="Percentage/CGPA"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default Education;
