import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../templates/Hero';

const Leonardo = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <Hero/>

      
    </div>
  );
};

export default Leonardo;
