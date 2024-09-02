import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import VincentPaintings from "../docs/VincentPaintings";
import Paintings from "../templates/Paintings";

const Vincent = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />

      <Gallery/>

      <Paintings painterData={VincentPaintings} painterName="Vincent Van Gogh" />
    </div>
  );
};

export default Vincent;
