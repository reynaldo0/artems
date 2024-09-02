// src/pages/Vincent.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";

const Vincent = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />

      <Gallery/>
    </div>
  );
};

export default Vincent;
