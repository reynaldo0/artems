import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import galleryData from "../docs/GalleryData";

const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
};

const Gallery = () => {
  const location = useLocation();
  const { pathname } = location;

  const currentData = galleryData.find(data => data.path === pathname) || {};
  const { images = [], mainImage = {}, description, born, died } = currentData;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    preloadImages([...images, mainImage]);
  }, [images, mainImage]);

  return (
    <div className="relative max-w-screen-2xl mx-auto py-24 md:py-36 w-full flex flex-col items-center px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div
          className="flex md:flex-col gap-2 md:gap-8"
          data-aos={isDesktop ? "fade-right" : "fade-up"}
          data-aos-duration="800"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-72 h-48 sm:h-60 md:h-60 overflow-hidden rounded-3xl group shadow"
            >
              <img
                src={item.src}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center text-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-2xl md:text-4xl md:px-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative md:absolute md:left-[21rem] flex flex-col md:flex-row col-span-1 mt-2 md:mt-0">
          <div
            className="relative w-full md:w-80 h-60 md:h-full overflow-hidden rounded-3xl group shadow"
            data-aos={isDesktop ? "fade-left" : "fade-up"}
            data-aos-duration="900"
          >
            <img
              src={mainImage.src}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              alt={mainImage.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl md:text-5xl md:px-10 text-center">
                {mainImage.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-5 md:pt-20 md:pl-16 w-full md:w-3/5">
            <div
              className="flex flex-col space-y-4"
              data-aos={isDesktop ? "fade-left" : "fade-up"}
              data-aos-duration="1000"
            >
              <h2 className="text-3xl font-bold mb-4 md:text-7xl">
                {mainImage.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                {description}
              </p>
            </div>
            <div className="flex flex-row pt-10 md:pt-16 gap-12 md:gap-40"
              data-aos={isDesktop ? "fade-left" : "fade-up"}
              data-aos-duration="1100"
            >
              <div className="flex flex-col">
                <p>Born</p>
                <p className="font-bold text-lg">
                  {born}
                </p>
              </div>
              <div className="flex flex-col">
                <p>Died</p>
                <p className="font-bold text-lg">
                  {died}
                </p>
              </div>
            </div>
            <div className="flex pt-7"
              data-aos={isDesktop ? "fade-left" : "fade-up"}
              data-aos-duration="1000"
            >
              <a href="#paintings" className="bg-transparent border-2 border-primary hover:bg-primary hover:text-white text-primary rounded-full px-5 py-2">
                See Paintings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
