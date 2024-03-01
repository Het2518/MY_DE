import React, { useState } from 'react';

const Sidebar = ({ setActiveSection }) => {
 const [isSidebarVisible, setIsSidebarVisible] = useState(false);

 const sections = [
    { id: 'basic-info', title: 'Basic Info' },
    { id: 'education', title: 'Education' },
    { id: 'work-experience', title: 'Work Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'achievements', title: 'Achievements' },
    { id: 'projects', title: 'Projects' },
    { id: 'social-links', title: 'Social Links' },
 ];

 const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
 };

 return (
    <div className='-ml-10'>
      <button
        onClick={toggleSidebar}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
      >
        <p className="text-lg  text-center ">Make your resume</p>
      </button>
      <aside className={`bg-gray-800 text-white w-full h-auto transition-all duration-300 ease-in-out transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <ul className='w-full'>
          {sections.map((section) => (
            <li key={section.id} className="p-4 hover:bg-gray-700 w-full ">
              <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className="text-lg ">{section.title}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
 );
};

export default Sidebar;
