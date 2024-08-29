import React from "react";

const Gallery = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto py-24 md:py-36 w-full flex flex-col items-center px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex flex-col gap-8">
          <div className="relative w-full md:w-72 h-48 sm:h-60 md:h-60 overflow-hidden rounded-3xl group sedow">
            <img
              src="/monalisa.png"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="Mona Lisa"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl md:text-5xl">Mona Lisa</p>
            </div>
          </div>
          <div className="relative w-full md:w-72 h-48 sm:h-60 md:h-60 overflow-hidden rounded-3xl group sedow">
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

        <div className="relative md:absolute md:left-[21rem] flex flex-col md:flex-row col-span-1 mt-10 md:mt-0">
          <div className="relative w-full md:w-80 h-60 md:h-full overflow-hidden rounded-3xl group sedow">
            <img
              src="/leonardo.png"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt="Leonardo Da Vinci"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl md:text-5xl text-center">Leonardo Da Vinci</p>
            </div>
          </div>

          <div className="flex flex-col pt-5 md:pt-20 md:pl-16 w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-4 md:text-7xl">Leonardo
              Da Vinci</h2>
            <p className="text-lg md:text-xl text-gray-600">
              This gallery features some of the most renowned artworks including the Mona Lisa, The Last Supper, and works by Leonardo Da Vinci. Each piece is a masterpiece with its unique history and significance in the art world.
            </p>
            <div className="flex flex-row pt-10 md:pt-20 gap-12 md:gap-40">
              <div className="flex flex-col">
                <p>Bom</p>
                <p className="font-bold text-lg">April 15, 1452</p>
              </div>
              <div className="flex flex-col">
                <p>Died</p>
                <p className="font-bold text-lg">May 2, 1519</p>
              </div>
            </div>
            <div className="flex pt-10">
              <button className="bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary rounded-full px-5 py-2">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
