import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import MichaelangeloPaintings from "../docs/MichaelangeloPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";
import Footer from "../components/Footer";

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
      <section id="timeline">
        <ArtTimeline />
      </section>
      <CanvasPage />
      <Footer />
    </div>
  );
};

export default Michaelangelo;
