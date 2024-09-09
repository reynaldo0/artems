import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paintings from "./templates/Paintings";
import ArtTimeline from "./components/ArtTimeline";
import CanvasPage from "./components/CanvasPage";
import Vincent from "./pages/Vincent";
import Leonardo from "./pages/Leonardo";
import Footer from "./components/Footer";
import Pablo from "./pages/Pablo";
import Michaelangelo from "./pages/Michaelangelo";
import Dali from "./pages/Dali";
import AboutPage from "./pages/AboutPage";
import Alifian from "./pages/Alifian";
import Salman from "./pages/Salman";
import Aldo from "./pages/Aldo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Leonardo />} />
        <Route path="/vincent" element={<Vincent />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/michaelangelo" element={<Michaelangelo />} />
        <Route path="/dali" element={<Dali />} />
        
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/alifian" element={<Alifian/>}/>
        <Route path="/salman" element={<Salman/>}/>
        <Route path="/aldo" element={<Aldo/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
