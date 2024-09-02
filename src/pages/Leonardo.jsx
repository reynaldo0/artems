import React from 'react';
import Hero from '../templates/Hero';
import Gallery from '../templates/Galery';
import Paintings from '../templates/Paintings';
import leonardoPaintings from '../docs/LeonardoPaintings'; // Import the paintings data for Leonardo

const Leonardo = () => {
    return (
        <div>
            <Hero /> 
            <Gallery /> 
            <Paintings painterData={leonardoPaintings} painterName="Leonardo Da Vinci" />
        </div>
    );
};

export default Leonardo;
