import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import DaliPaintings from "../docs/DaliPaintings";
import Paintings from "../templates/Paintings";
import ArtTimeline from "../components/ArtTimeline";
import CanvasPage from "../components/CanvasPage";
import Footer from "../components/Footer";

const Dali = () => {
  const location = useLocation();

  return (
    <div>
       <section id="hero">
        <Hero />
      </section>
      <Gallery />
      <section id="paintings">
      <Paintings painterData={DaliPaintings} painterName="Salvador Dali" />
      </section>
      <ArtTimeline />
      <CanvasPage />
      <Footer/>
    </div>
  );
};

export default Dali;
