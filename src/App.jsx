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
      </main>
    </>
  );
}

export default App;
