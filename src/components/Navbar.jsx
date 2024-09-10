import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '/vite.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const homeClick = () => {
    if (location.pathname === '/') {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const aboutClick = () => {
    if (location.pathname === '/') {
      document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTimeline: true } });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[99999] transition-transform duration-300 ease-out scale-90 md:scale-125`}
    >
      <div className="flex items-center justify-between rounded-full p-[2px] bg-gradient-to-r from-primary/50 to-primary/10 backdrop-blur-md">
        <div className="flex items-center space-x-4 bg-primary/50 rounded-full px-4 py-1">
          <div className="flex items-center justify-center w-10 h-10">
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
          <ul className="flex space-x-4 text-white">
            <li className="relative group">
              <button
                onClick={homeClick}
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Home
              </button>
            </li>
            <li className="relative group">
              <button
                onClick={aboutClick}
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Timeline
              </button>
            </li>
            <li className="relative group">
              <Link
                to="/alifian"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-200 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <a
              href="#3d"
              className="bg-primary/100 text-white px-3 py-1 rounded-full hover:bg-yellow-200 hover:text-primary transition-all duration-300"
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
