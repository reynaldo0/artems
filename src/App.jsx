import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Galery from "./pages/Galery";
import Paintings from "./pages/Paintings";
import ArtTimeline from "./components/ArtTimeline";
import CanvasPage from "./pages/CanvasPage";
import Vincent from "./pages/Vincent";
import Leonardo from "./pages/Leonardo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Leonardo />
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
