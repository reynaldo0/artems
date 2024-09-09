import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroData from '../docs/HeroData';
import { FlipWords } from '../components/ui/flip-words'; 

const AboutPage = () => {
  const location = useLocation();
  const { pathname } = location;

  const currentData = heroData.find((data) => data.path === pathname) || {};
  const { image, description } = currentData;

  const words = ['About Us', 'Tentang Kami', 'À Propos de Nous', '私たちについて'];

  return (
    <div
  className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
  style={{ backgroundImage: `url(${image || '/painters/leonardo/hero2.jpg'})` }} 
>

      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/90 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        {/* Teks dengan FlipWords */}
        <div className="mt-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
             <FlipWords words={words} /> 
          </h1>
          <p className="mt-3 text-lg md:text-xl">{description}</p>
        </div>
      </div>

      {/* Section Menu */}
      <div className="relative z-50 bottom-32 mt-5 md:bottom-40 left-0 w-full flex flex-col items-center p-2 md:p-6 py-10">
        <div className="bg-primary text-white pt-2 px-6 md:px-20 rounded-t-2xl shadow-lg text-center">
          <h5 className="text-2xl font-semibold mb-1">Our Team</h5>
        </div>

        <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow-lg w-[90%] md:max-w-[350px] text-center p-2 md:p-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-7 text-xs md:text-2xl">
            <Link
              to="/alifian"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === '/alifian'
                  ? 'bg-primary text-white px-2 md:px-10'
                  : 'text-primary hover:bg-gray-200'
              }`}
            >
              Alifian
            </Link>
            <Link
              to="/salman"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === '/salman'
                  ? 'bg-primary text-white px-2 md:px-10'
                  : 'text-primary hover:bg-gray-200'
              }`}
            >
              Salman
            </Link>
            <Link
              to="/aldo"
              className={`block py-2 md:px-4 rounded-2xl transition-all duration-300 ${
                pathname === '/aldo'
                  ? 'bg-primary text-white px-2 md:px-10'
                  : 'text-primary hover:bg-gray-200'
              }`}
            >
              Aldo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
