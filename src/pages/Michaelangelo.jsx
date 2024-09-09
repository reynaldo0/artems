import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import MichaelangeloPaintings from "../docs/MichaelangeloPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";

const Michaelangelo = () => {
  const location = useLocation();

  return (
    <div>
     <section id="hero">
        <Hero />
      </section>
      <Gallery />
      <section id="paintings">
      <Paintings
        painterData={MichaelangeloPaintings}
        painterName="Michelangelo Buonarroti"
      />
      </section>
      <ArtTimeline />
      <CanvasPage />
    </div>
  );
};

export default Michaelangelo;
