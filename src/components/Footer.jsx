import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">Email: <a href="mailto:shreyasidutta53@gmail.com" className="text-gray-400 hover:underline">shreyasidutta53@gmail.com</a></p>
        <p className="mb-2">Address: <a href="Siliguri,India" className="text-gray-400 hover:underline">Siliguri, India</a></p>
        
        <div className="flex space-x-4 mt-4">
          <a href="https://linkedin.com/in/shreyasi-dutta-" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Shreyasi53" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social links if needed */}
        </div>
        <p className="mt-4 text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Shreyasi Dutta.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
