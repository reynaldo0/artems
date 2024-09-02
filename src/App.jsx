import { Loader } from "@react-three/drei";
import ArtTimeline from "./components/ArtTimeline";
import { UI } from "./components/Models/UI";
import { Experience } from "./components/Models/Experience";
import Navbar from "./components/Navbar";
import Galery from "./pages/Galery";
import { Hero } from "./pages/Hero";
import Paintings from "./pages/Paintings";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasPage from "./pages/CanvasPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Galery />
        <Paintings />
        <ArtTimeline />
        <CanvasPage/>
      </main>
    </>
  );
}

export default App;
