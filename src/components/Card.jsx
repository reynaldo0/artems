import React, { useState } from 'react';

const Card = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-t-3xl shadow-lg overflow-hidden">
      <img
        src={image}
        className="w-full h-60 object-cover"
        alt={title}
      />
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-2">{title}</h5>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
        </div>
        <button
          onClick={handleReadMoreClick}
          className="bg-primary text-white py-2 px-4 hover:bg-primary-dark transition-colors duration-300"
        >
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
