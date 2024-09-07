import React, { useEffect, useRef } from 'react';

const Card = ({ title, description, image, isOpen, onToggle }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={cardRef}
      className="relative max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:w-[400px]" 
    >
      <img
        src={image}
        className="w-full h-52 md:h-60 object-cover"
        alt={title}
        loading='lazy'
      />
      <div className="p-6"> 
        <h5 className="text-2xl font-bold mb-3">{title}</h5> 
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-600 mb-4 text-md">
            {description}
          </p>
        </div>
        <button
          onClick={onToggle}
          className="bg-primary text-white py-2 px-6 mt-2 hover:bg-primary-dark transition-colors duration-300 rounded-lg"
        >
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
