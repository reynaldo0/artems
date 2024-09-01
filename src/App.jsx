import ArtTimeline from "./components/ArtTimeline";
import Navbar from "./components/Navbar";
import Galery from "./pages/Galery";
import { Hero } from "./pages/Hero";
import Paintings from "./pages/Paintings";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <main >
        <Galery/>
        <Paintings/>
        <ArtTimeline/>
      </main>
    </>
  );
}

export default App;
