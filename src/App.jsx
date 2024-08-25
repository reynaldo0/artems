import Navbar from "./components/Navbar";
import Galery from "./pages/Galery";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <main >
        <Galery/>
      </main>
    </>
  );
}

export default App;
