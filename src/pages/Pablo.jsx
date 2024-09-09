import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import PabloPaintings from "../docs/PabloPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";

const Pablo = () => {
  const location = useLocation();

  return (
    <div>
       <section id="hero">
        <Hero />
      </section>
      <Gallery />
      <section id="paintings">
      <Paintings painterData={PabloPaintings} painterName="Pablo Picasso" />
      </section>
      <ArtTimeline />
      <CanvasPage />
    </div>
  );
};

export default Pablo;
