import React from "react";
import Hero from "../templates/Hero";
import Gallery from "../templates/Galery";
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import GalleryAbout from "../templates/GalleryAbout";

const Aldo = () => {
  return (
    <div>
      <section id="hero">
        <AboutPage />
      </section>
      <GalleryAbout />
      <Footer />
    </div>
  );
};

export default Aldo;
