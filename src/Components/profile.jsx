import React from "react";

const Profile = () => {
  // Example user data
  const user = {
    name: "John Doe",
    bio: "Software Developer and Tech Enthusiast",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
    education: [
      {
        title: "Bachelor of Science in Computer Science",
        institution: "XYZ University",
        year: "2015 -   2019",
      },
    ],
    workExperience: [
      {
        title: "Software Developer",
        company: "ABC Corp",
        duration: "2019 - Present",
        description:
          "Developed and maintained web applications using React and Node.js.",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "Docker"],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl">
        <div className="mb-4">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src={user.profilePicture}
            alt="Profile"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-700 text-base">{user.bio}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Education</h2>
          {user.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-base font-medium">{edu.title}</h3>
              <p className="text-sm text-gray-600">
                {edu.institution}, {edu.year}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Work Experience</h2>
          {user.workExperience.map((exp, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-base font-medium">{exp.title}</h3>
              <p className="text-sm text-gray-600">
                {exp.company}, {exp.duration}
              </p>
              <p className="text-sm text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {user.skills.map((skill, index) => (
              <li key={index} className="text-sm text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
