import React from 'react';

const Sidebar = ({ setActiveSection }) => {
 const sections = [
    { id: 'basic-info', title: 'Basic Info' },
    { id: 'education', title: 'Education' },
    { id: 'work-experience', title: 'Work Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'achievements', title: 'Achievements' },
    { id: 'projects', title: 'Projects' },
    { id: 'social-links', title: 'Social Links' },
 ];

 return (
    <aside className="bg-gray-800 text-white w-1/4 h-screen">
      <h1 className="text-2xl p-4">Make your resume</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="p-4 hover:bg-gray-700">
            <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className="text-lg">{section.title}</a>
          </li>
        ))}
      </ul>
    </aside>
 );
};

export default Sidebar;
