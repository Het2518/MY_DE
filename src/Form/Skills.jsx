// src/Form/Skills.jsx
import React from "react";

const Skills = ({ skills, setSkills }) => {
  const handleChange = (e) => {
    setSkills([...skills, e.target.value]);
    e.target.value = "";
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Skills</h3>
      <input
        type="text"
        name="skill"
        placeholder="Add a skill"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
};

export default Skills;
