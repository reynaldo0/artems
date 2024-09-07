import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroData from '../docs/HeroData';

const Hero = () => {
  const location = useLocation();
  const { pathname } = location;

  const currentData = heroData.find(data => data.path === pathname) || {};

  const { image, title, description } = currentData;

  return (  
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold" data-aos="fade-up" data-aos-duration="1000">
          {title}
        </h1>
        <p className="mt-3 text-lg md:text-xl" data-aos="fade-up" data-aos-duration="1300">
          {description}
        </p>
      </div>

      <div className="relative z-50 bottom-32 md:bottom-40 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10" data-aos="fade-up" data-aos-duration="1100">
        <div className="bg-primary text-white pt-2 px-6 md:px-20 rounded-t-2xl shadow-lg text-center">
          <h5 className="text-2xl font-semibold mb-4">Painters</h5>
        </div>

        <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow-lg w-full md:max-w-5xl text-center p-3 md:p-8">
          <div className="flex gap-2 md:gap-7 text-xs md:text-2xl">
            <Link
              to="/"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === "/"
                  ? "bg-primary text-white px-2 md:px-10"
                  : "text-primary hover:bg-gray-200"
              }`}
            >
              Leonardo Da Vinci
            </Link>
            <Link
              to="/vincent"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === "/vincent"
                  ? "bg-primary text-white px-2 md:px-10"
                  : "text-primary hover:bg-gray-200"
              }`}
            >
              Vincent Van Gogh
            </Link>
            <Link
              to="/pablo"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === "/pablo"
                  ? "bg-primary text-white px-2 md:px-10"
                  : "text-primary hover:bg-gray-200"
              }`}
            >
              Pablo Picasso
            </Link>
            <Link
              to="/michaelangelo"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === "/michaelangelo"
                  ? "bg-primary text-white px-2 md:px-10"
                  : "text-primary hover:bg-gray-200"
              }`}
            >
              Michaelangelo Buonarroti
            </Link>
            <Link
              to="/dali"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === "/dali"
                  ? "bg-primary text-white px-2 md:px-10"
                  : "text-primary hover:bg-gray-200"
              }`}
            >
              Salvador Dali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
