import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import DaliPaintings from "../docs/DaliPaintings";
import Paintings from "../templates/Paintings";

const Dali = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />

      <Gallery/>

      <Paintings painterData={DaliPaintings} painterName="Dali Van Gogh" />
    </div>
  );
};

export default Dali;
