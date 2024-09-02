import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../templates/Hero';
import Gallery from '../templates/Galery';

const Leonardo = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <Hero/>

      <Gallery/>
    </div>
  );
};

export default Leonardo;
