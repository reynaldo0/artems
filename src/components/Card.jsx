import React, { useState } from 'react';

const Card = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white rounded-t-3xl shadow-lg overflow-hidden w-[400px]">
      <img
        src={image}
        className="w-full h-64 object-cover" // Apply rounded corners only to the top
        alt={title}
      />
      <div className="p-6"> {/* Increased padding for larger content area */}
        <h5 className="text-3xl font-bold mb-3">{title}</h5> {/* Increased title size */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-600 mb-4 text-lg"> {/* Increased font size */}
            {description}
          </p>
        </div>
        <button
          onClick={handleReadMoreClick}
          className="bg-primary text-white py-2 px-6 mt-4 hover:bg-primary-dark transition-colors duration-300 rounded-lg" // Increased padding
        >
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
