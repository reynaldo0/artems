import React, { useEffect, useRef, useState } from 'react';
import logoImg from '/vite.svg';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollTop > lastScrollTop) {
        setIsScrolling(true);
        setIsVisible(false);
      } else {
        setIsScrolling(false);
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[99999] transition-transform duration-300 ease-out ${
        isVisible && !isScrolling ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center justify-between rounded-full p-[2px] bg-gradient-to-r from-primary/50 to-primary/10 backdrop-blur-md">
        <div className="flex items-center space-x-4 bg-primary/50 rounded-full px-4 py-1">
          <div className="flex items-center justify-center w-10 h-10">
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <ul className="flex space-x-4 text-white">
            <li className="relative group">
            <Link
    to="/" // Mengubah href menjadi to untuk berpindah ke halaman About
    className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
  >
    Home
  </Link>
            </li>
            <li className="relative group">
              <a
                href="#paintings"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Paintings
              </a>
            </li>
            <li className="relative group">
  <Link
    to="/alifian" // Mengubah href menjadi to untuk berpindah ke halaman About
    className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
  >
    About
  </Link>
</li>
          </ul>
          <div className="flex items-center">
            <a
              href="#3d"
              className="bg-primary/100 text-white px-3 py-1 rounded-full hover:bg-yellow-200  hover:text-primary transition-all duration-300"
            >
              3D
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
