import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-200 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi There, I'm Shreyasi Dutta</h1>
      <p className="text-xl mb-10">I Am Into Web Development</p>
      <a href="#about" className="scroll-button bg-pink-500 text-white px-4 py-2 rounded">About Me</a>
    </section>
  );
};

export default Home;
