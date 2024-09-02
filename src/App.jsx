// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Galery from "./pages/Galery";
import Paintings from "./pages/Paintings";
import ArtTimeline from "./components/ArtTimeline";
import CanvasPage from "./pages/CanvasPage";
import Vincent from "./pages/vincent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <main>
              <Galery />
              <Paintings />
              <ArtTimeline />
              <CanvasPage />
            </main>
          </>
        } />
        <Route path="/vincent" element={<Vincent />} />
        {/* Tambahkan rute untuk halaman lain jika perlu */}
      </Routes>
    </>
  );
}

export default App;
