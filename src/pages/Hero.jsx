import React from 'react';
import backgroundImg from '/leonardp.png';

export const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">The Painters symphony</h1>
        <p className="mt-3 text-lg md:text-xl">Discover the World of Painters and Their Artistic Masterpieces.

</p>
      </div>
    </div>
  );
};
