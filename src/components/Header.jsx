import React, { useState } from 'react';
import { scrollToSection } from '../utils/scrollUtils'; 
import logo from '../assets/sdlogo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id, e) => {
    e.preventDefault();
    scrollToSection(id);
    setMenuOpen(false); //Close menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex justify-between items-center h-16 z-10">
      <div>
        <img src={logo} alt="Logo" className="h-24" />
      </div>
      <nav className="hidden md:flex">
        <a href="#home" onClick={(e) => handleScroll('home', e)} className="mr-4 hover:underline">
          Home
        </a>
        <a href="#about" onClick={(e) => handleScroll('about', e)} className="mr-4 hover:underline">
          About
        </a>
        <a href="#skills" onClick={(e) => handleScroll('skills', e)} className="mr-4 hover:underline">
          Skills
        </a>
        <a href="#projects" onClick={(e) => handleScroll('projects', e)} className="mr-4 hover:underline">
          Projects
        </a>
        <a href="#contact" onClick={(e) => handleScroll('contact', e)} className="mr-4 hover:underline">
          Contact
        </a>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="h-1 w-8 bg-white my-1"></div>
          <div className="h-1 w-8 bg-white my-1"></div>
          <div className="h-1 w-8 bg-white my-1"></div>
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded shadow-lg">
            <a href="#home" onClick={(e) => handleScroll('home', e)} className="block mb-2 hover:underline">
              Home
            </a>
            <a href="#about" onClick={(e) => handleScroll('about', e)} className="block mb-2 hover:underline">
              About
            </a>
            <a href="#skills" onClick={(e) => handleScroll('skills', e)} className="block mb-2 hover:underline">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleScroll('projects', e)} className="block mb-2 hover:underline">
              Projects
            </a>
            <a href="#contact" onClick={(e) => handleScroll('contact', e)} className="block hover:underline">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
