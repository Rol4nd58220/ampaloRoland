import React from 'react';
import Image from 'next/image';

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Circles component (assuming it's in your project)
import Circles from '../../components/Circles';

// SkillBar component
const SkillBar = ({ skill, level }) => (
  <div className="flex items-center mb-4">
    <span className="mr-2">{skill}</span>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const About = () => {
  // Sample skills data
  const skills = [
    { name: <FaHtml5 />, level: 90 },
    { name: <FaCss3 />, level: 85 },
    { name: <FaJs />, level: 80 },
    { name: <FaReact />, level: 75 },
    { name: <SiNextdotjs />, level: 70 },
  ];

  return (
    <div className="bg-primary/60 h-full container mx-auto flex flex-col lg:flex-row items-center justify-between py-6">
      {/* Bio Section */}
      <div className="lg:w-1/3 px-4 mb-6 lg:mb-0">
        <h2 className="text-2xl font-bold text-left">About Me</h2>
        <p className="text-left mt-4">Im a passionate web developer with a focus on modern JavaScript technologies. I love creating interactive and dynamic user experiences.</p>
        <h3 className="text-xl font-semibold text-left mt-6">Contact Details</h3>
        <ul className="list-none mt-4">
          <li className="flex items-center mb-2"><FaEnvelope className="mr-2" /> email@example.com</li>
          <li className="flex items-center mb-2"><FaPhone className="mr-2" /> +123456789</li>
          <li className="flex items-center mb-2"><FaLinkedin className="mr-2" /> LinkedInProfile</li>
          <li className="flex items-center mb-2"><FaGithub className="mr-2" /> GitHubProfile</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 px-4 mb-6 lg:mb-0 flex justify-center">
        <Image 
          src="/avatar2.png" 
          alt="Profile Picture" 
          width={200} // Adjust as needed
          height={200} // Adjust as needed
          className="rounded-full"
        />
      </div>

      {/* Skills Section */}
      <div className="skills-section lg:w-1/3 px-4">
        <h3 className="text-2xl font-bold text-left">My Skills</h3>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default About;