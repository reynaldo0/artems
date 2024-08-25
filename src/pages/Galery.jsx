import React from "react";

const Galery = () => {
  return (
    <div className="relative md:left-56 max-w-7xl mx-auto py-24 md:py-52 flex justify-center items-center px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col gap-8">
          <div className="relative w-full h-48 sm:h-60 md:h-80 overflow-hidden rounded-3xl group">
            <img
              src="/monalisa.png"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="Mona Lisa"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl md:text-6xl">Mona Lisa</p>
            </div>
          </div>
          <div className="relative w-full h-48 sm:h-60 md:h-80 overflow-hidden rounded-3xl group">
            <img
              src="/supper.png"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="The Last Supper"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl md:text-6xl text-center">The Last Supper</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 group">
          <div className="relative w-full h-60 sm:h-80 md:h-[320px] lg:h-[680px] flex items-center justify-center overflow-hidden rounded-3xl group">
            <img
              src="/leonardo.png"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="Leonardo Da Vinci"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-3xl">
              <p className="text-white text-3xl md:text-6xl text-center">Leonardo Da Vinci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
