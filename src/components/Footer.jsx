import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary mt-20">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col justify-between md:mb-0">
            <a href="#home" className="flex items-center">
              <img
                src="./logo.png"
                className="me-3 h-25 w-[100px]"
                alt="FlowBite Logo"
              />
            </a>

            <div className="mb-5 mt-5 md:mb-0">
              <h2 className="mb-6 text-base font-semibold uppercase text-white">
                contact us
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="location"></ion-icon>
                  <a href="#" className="hover:underline hover:text-yellow-200">
                    SMK Negeri 46 Jakarta
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="mail"></ion-icon>
                  <a href="#" className="hover:underline hover:text-yellow-200">
                    artem@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Content
              </h2>
              <ul className="font-medium text-white/60">
                
                <li className="mb-4">
                  <Link to="/" className="hover:underline hover:text-yellow-200">
                    Leonardo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/vincent" className="hover:underline hover:text-yellow-200">
                    Vincent
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/pablo" className="hover:underline hover:text-yellow-200">
                    Pablo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/michaelangelo" className="hover:underline hover:text-yellow-200">
                    Michelangelo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/dali" className="hover:underline hover:text-yellow-200">
                    Salvador
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                data source
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4">
                  <a
                    href="https://Detik.com"
                    className="lowercase hover:underline hover:text-yellow-200"
                  >
                    Van Gogh Museum
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Kompasiana.com"
                    className="lowercase hover:underline hover:text-yellow-200"
                  >
                    Museu Picasso Barcelona
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Channel9.id"
                    className="lowercase hover:underline hover:text-yellow-200"
                  >
                     The Michelangelo Foundation
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Goodstats.id"
                    className="lowercase hover:underline hover:text-yellow-200"
                  >
                    Fundació Gala-Salvador Dalí
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://pusiknas.polri.go.id/"
                    className="lowercase hover:underline hover:text-yellow-200"
                  >
                    Wikipedia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Credit
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4">
                  <a
                    href="https://www.metmuseum.org/art/collection"
                    className="hover:underline hover:text-yellow-200"
                  >
                    The Met Collection
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-center text-sm text-white/60">
            Made by artem.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
