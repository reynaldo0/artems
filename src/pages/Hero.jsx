import React from "react";
import backgroundImg from "/leonardp.png";

export const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          The Painters Symphony
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Discover the World of Painters and Their Artistic Masterpieces.
        </p>
      </div>

      <div className="relative bottom-24 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10">
        <div className="bg-primary text-white bg-opacity-75 pt-2 px-20 rounded-t-2xl shadow-lg text-center">
          <h5 className="text-2xl font-semibold mb-4">Painters</h5>
        </div>

        <div className="bg-white/80 text-primary bg-opacity-75 rounded-lg shadow-lg w-full md:max-w-5xl text-center p-3 md:p-8">
          <div className="flex gap-2 md:gap-7 text-xs md:text-2xl">
            <a href="index.html" className="block hover:text-primary/80">Leonardo Da Vinci</a>
            <a href="2-vincent.html" className="block hover:text-primary/80">Vincent Van Gogh</a>
            <a href="3-pablopicasso.html" className="block hover:text-primary/80">Pablo Picasso</a>
            <a href="4-michaelangelo.html" className="block hover:text-primary/80">Michaelangelo Buonarroti</a>
            <a href="5-salvador.html" className="block hover:text-primary/80">Salvador Dali</a>
          </div>
        </div>
      </div>
    </div>
  );
};
