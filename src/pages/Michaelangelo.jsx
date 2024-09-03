import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import MichaelangeloPaintings from "../docs/MichaelangeloPaintings";
import Paintings from "../templates/Paintings";

const Michaelangelo = () => {
  const location = useLocation();

  return (
    <div>
      <Hero />

      <Gallery/>

      <Paintings painterData={MichaelangeloPaintings} painterName="Michaelangelo Van Gogh" />
    </div>
  );
};

export default Michaelangelo;
