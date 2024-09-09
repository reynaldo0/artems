import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import VincentPaintings from "../docs/VincentPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";

const Vincent = () => {
  const location = useLocation();

  return (
    <div>
       <section id="hero">
        <Hero />
      </section>
      <Gallery />
      <section id="paintings">
      <Paintings
        painterData={VincentPaintings}
        painterName="Vincent Van Gogh"
      />
      </section>
      <ArtTimeline />
      <CanvasPage />
    </div>
  );
};

export default Vincent;
