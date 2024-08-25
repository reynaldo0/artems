// src/components/Galery.jsx
import React from "react";

const Galery = () => {
  return (
    <div className="max-w-4xl mx-auto py-52 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {/* Left Column: Two images with equal size */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
            <img src="/monalisa.png" className="object-cover w-full h-full" alt="Mona Lisa" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg">Mona Lisa</p>
            </div>
          </div>
          <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
            <img src="/supper.png" className="object-cover w-full h-full" alt="The Last Supper" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg">The Last Supper</p>
            </div>
          </div>
        </div>

        {/* Right Column: Larger image with the same height as the combined height of the two left images */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            <img
              src="/leonardo.png"
              className="object-cover h-full max-h-[590px]"
              alt="Leonardo Da Vinci"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-lg">Leonardo Da Vinci</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
