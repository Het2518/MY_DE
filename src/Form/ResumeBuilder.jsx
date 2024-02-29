// src/Form/ResumeBuilder.jsx
import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Projects from "./Projects";
import SocialLinks from "./SocialLinks";
import Sidebar from "./Sidebar"; // Import the Sidebar component

// The rest of the ResumeBuilder component remains the same

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState("basic-info");
  const [basicInfo, setBasicInfo] = useState({});
  const [education, setEducation] = useState({});
  const [workExperience, setWorkExperience] = useState({});
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState("");
  const [projects, setProjects] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  const downloadResume = () => {
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Resume</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff9f9;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          }
          h2 {
            color: #db75b4;
            margin-bottom: 10px;
          }
          p {
            margin: 0;
            margin-bottom: 5px;
            padding-top: 3%;
          }
          .basicinfo{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .skills{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .education{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .workexp{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .achive{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .project{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
          .social{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
          }
        </style>
      </head>
      <body>
        <div id="download" class="container mt-5">
          <div class="basicinfo">   
            <h2>Basic Information</h2>
            <p>Name: ${basicInfo.fullName}</p>
            <p>Mobile: ${basicInfo.mobileNumber}</p>
            <p>DOB: ${basicInfo.dob}</p>
            <p>Email: ${basicInfo.email}</p>
            <p>Title: ${basicInfo.title}</p>
            <p>Address: ${basicInfo.address}</p>
          </div>
          <div class="education">
            <h2>Education</h2>
            <p>Institute: ${education.instituteName}</p>
            <p>Degree: ${education.degree}</p>
            <p>Field of Study: ${education.fieldOfStudy}</p>
            <p>Start Date: ${education.startDate}</p>
            <p>Percentage/CGPA: ${education.percentageCGPA}</p>
          </div>
          <div class="workexp">
            <h2>Work Experience</h2>
            <p>Employer: ${workExperience.employer}</p>
            <p>Job Title: ${workExperience.jobTitle}</p>
            <p>Start Date: ${workExperience.startDate}</p>
            <p>Description: ${workExperience.description}</p>
          </div>
          <div class="skills">
            <h2>Skills</h2>
            <ul>
              ${skills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
          </div>
          <div class="achive">
            <h2>Achievements</h2>
            <p>${achievements}</p>
          </div>
          <div class="project">
            <h2>Projects</h2>
            <ul>
              ${projects.map((project) => `<li>${project}</li>`).join("")}
            </ul>
          </div>
          <div class="social">
            <h2>Social Links</h2>
            <p>Github: ${socialLinks.github}</p>
            <p>LinkedIn: ${socialLinks.linkedIn}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([resumeHTML], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.html";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-8">Resume Builder</h1>
      <Sidebar setActiveSection={setActiveSection} />
      {activeSection === "basic-info" && (
        <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
      )}
      {activeSection === "education" && (
        <Education education={education} setEducation={setEducation} />
      )}
      {activeSection === "work-experience" && (
        <WorkExperience
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      )}
      {activeSection === "skills" && (
        <Skills skills={skills} setSkills={setSkills} />
      )}
      {activeSection === "achievements" && (
        <Achievements
          achievements={achievements}
          setAchievements={setAchievements}
        />
      )}
      {activeSection === "projects" && (
        <Projects projects={projects} setProjects={setProjects} />
      )}
      {activeSection === "social-links" && (
        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
        />
      )}
      <button
        onClick={downloadResume}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-8"
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeBuilder;
