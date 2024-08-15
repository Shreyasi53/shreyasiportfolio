import React from 'react';

// Example projects data
const projects = [
  {
    name: 'Spotify clone',
    description: 'A clone of Spotify built with HTML and CSS, featuring music playback and a user-friendly interface.',
    link: 'https://github.com/Shreyasi53/Spotify-clone',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section min-h-screen p-8 bg-gray-200">
      <h2 className="text-3xl font-bold mt-20 mb-6 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center w-80 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
