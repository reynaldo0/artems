import React from "react";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import Paintings from "../templates/Paintings";
import leonardoPaintings from "../docs/LeonardoPaintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";
import Footer from "../components/Footer";

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
      <section id="timeline">
        <ArtTimeline />
      </section>
      <section id="3d">
        <CanvasPage />
      </section>
      <Footer />
    </div>
  );
};

export default Leonardo;
