import React from "react";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import Paintings from "../templates/Paintings";
import leonardoPaintings from "../docs/LeonardoPaintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "./CanvasPage";

const Leonardo = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Paintings
        painterData={leonardoPaintings}
        painterName="Leonardo Da Vinci"
      />
      <ArtTimeline />
      <CanvasPage />
    </div>
  );
};

export default Leonardo;
