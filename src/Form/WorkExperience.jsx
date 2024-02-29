// src/Form/WorkExperience.jsx
import React from "react";

const WorkExperience = ({ workExperience, setWorkExperience }) => {
  const handleChange = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Work Experience</h3>
      <input
        type="text"
        name="employer"
        placeholder="Employer"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
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
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default WorkExperience;
