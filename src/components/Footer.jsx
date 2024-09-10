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
                src="./vite.svg"
                className="me-3 h-20 w-[180px]"
                alt="FlowBite Logo"
              />
            </a>

            <div className="mb-5 mt-5 md:mb-0">
              <h2 className="mb-6 text-base font-semibold uppercase text-white">
                Hubungi Kami
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="location"></ion-icon>
                  <a href="#" className="hover:underline">
                    SMK Negeri 46 Jakarta
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-3 text-base">
                  <ion-icon name="mail"></ion-icon>
                  <a href="#" className="hover:underline">
                    seniin@gmail.com
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
                  <Link to="/" className="hover:underline">
                    Leonardo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/vincent" className="hover:underline">
                    Vincent
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/pablo" className="hover:underline">
                    Pablo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/michaelangelo" className="hover:underline">
                    Michelangelo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/dali" className="hover:underline">
                    Salvador
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Sumber Data
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4">
                  <a
                    href="https://Detik.com"
                    className="lowercase hover:underline"
                  >
                    Detik.com
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Kompasiana.com"
                    className="lowercase hover:underline"
                  >
                    Kompasiana
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Channel9.id"
                    className="lowercase hover:underline"
                  >
                    Channel9.id
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://Goodstats.id"
                    className="lowercase hover:underline"
                  >
                    Goodstats.id
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://pusiknas.polri.go.id/"
                    className="lowercase hover:underline"
                  >
                    pusiknas.polri
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.haibunda.com/"
                    className="lowercase hover:underline"
                  >
                    haibunda.com
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
                    href="https://www.freepik.com/"
                    className="hover:underline"
                  >
                    Freepik
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-center text-sm text-white/60">
            Dibuat oleh tim Seni
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
