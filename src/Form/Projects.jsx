// src/Form/Projects.jsx
import React from 'react';

const Projects = ({ projects, setProjects }) => {
 const handleChange = (e) => {
    setProjects([...projects, e.target.value]);
    e.target.value = '';
 };

 return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Projects</h3>
      <input type="text" name="project" placeholder="Add a project" className="w-full p-2 border border-gray-300 rounded mb-2" onChange={handleChange} />
      <ul id="project-list">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
 );
};

export default Projects;
