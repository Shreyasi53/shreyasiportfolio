// src/components/Skills.jsx
import React from 'react';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
  { name: 'Java', icon: 'fa-brands fa-java' },

];

const Skills = () => {
  return (
    <section id="skills" className="section min-h-screen p-8 bg-gray-200">
      <h2 className="text-3xl font-bold mt-20 mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card bg-white p-14 m-2 shadow-lg rounded-lg flex flex-col items-center w-48 h-52 transition-transform duration-300  hover:bg-pink-100 hover:scale-105">
            <i className={`${skill.icon} text-6xl mb-4 text-pink-600`}></i>
            <p className="text-xl font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
