import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vincent from './pages/Vincent';
import Leonardo from './pages/Leonardo';
import Footer from './components/Footer';
import Pablo from './pages/Pablo';
import Michaelangelo from './pages/Michaelangelo';
import Dali from './pages/Dali';
import AboutPage from './pages/AboutPage';
import Alifian from './pages/Alifian';
import Salman from './pages/Salman';
import Aldo from './pages/Aldo';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTimeline) {
      document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Leonardo />} />
        <Route path="/vincent" element={<Vincent />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/michaelangelo" element={<Michaelangelo />} />
        <Route path="/dali" element={<Dali />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/alifian" element={<Alifian />} />
        <Route path="/salman" element={<Salman />} />
        <Route path="/aldo" element={<Aldo />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
