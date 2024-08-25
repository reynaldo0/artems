// src/components/Galery.jsx
import React from "react";

const Galery = () => {
  return (
    <div className="max-w-7xl items-center mx-auto py-52 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col gap-8">
          <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-3xl">
            <img
              src="/monalisa.png"
              className="object-cover w-full h-full"
              alt="Mona Lisa"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg md:text-xl">Mona Lisa</p>
            </div>
          </div>
          <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-3xl">
            <img
              src="/supper.png"
              className="object-cover w-full h-full"
              alt="The Last Supper"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg md:text-xl">The Last Supper</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[320px] md:h-[320px] lg:h-[680px] flex items-center justify-center">
            <img
              src="/leonardo.png"
              className="object-cover w-full h-full rounded-3xl"
              alt="Leonardo Da Vinci"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-3xl">
              <p className="text-white text-lg md:text-xl">Leonardo Da Vinci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
