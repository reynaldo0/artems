import React from "react";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import Paintings from "../templates/Paintings";
import leonardoPaintings from "../docs/LeonardoPaintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";

const Leonardo = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <Gallery />
      <section id="paintings">
      <Paintings
        painterData={leonardoPaintings}
        painterName="Leonardo Da Vinci"
      />
      </section>
      <ArtTimeline />
      <CanvasPage />
    </div>
  );
};

export default Leonardo;
