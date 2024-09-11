import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react"; // Import the icons from lucide-react

const Footer = () => {
  return (
    <footer className="bg-primary mt-20">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col justify-between md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/artem3.png"
                className="me-3 h-25 w-[130px]"
                alt="Artem"
              />
            </Link>

            <div className="mb-5 mt-5 md:mb-0">
              <h2 className="mb-6 text-base font-semibold uppercase text-white">
                contact us
              </h2>
              <ul className="font-medium text-white/60">
                <li className="mb-4 flex items-center gap-3 text-base">
                  <MapPin className="w-5 h-5" /> {/* Replace ion-icon with MapPin */}
                  <a href="#" className="hover:underline hover:text-yellow-200">
                    SMK Negeri 46 Jakarta
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-3 text-base">
                  <Mail className="w-5 h-5" /> {/* Replace ion-icon with Mail */}
                  <a href="#" className="hover:underline hover:text-yellow-200">
                    artem@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
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
                    href="https://www.vangoghmuseum.nl/en"
                    className="hover:underline hover:text-yellow-200"
                  >
                    Van Gogh Museum
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwju5ey8pLqIAxUiq2YCHSOAGBMYABAAGgJzbQ&co=1&ase=2&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwIx2mKzW1G8HdkXqpNbqmsgSQZiH6nqnEWjsPVJ09oqzr57SF5z_GBoCpHoQAvD_BwE&ohost=www.google.com&cid=CAESVuD2nOScojiVO9JYyMaP2l3fMKU5gK2y2SL3LPzMbayhSQR6hAdBUmDp8l2Ry_AhCdBdckB-dpuW2XgVRgDD3DXyX22jR7SfEkKSy8lem30Ye8rfXbNT&sig=AOD64_0FsITtK0IBFoVQnQ-nfQEgE8KdXQ&q&nis=4&adurl&ved=2ahUKEwjOnue8pLqIAxUkUGwGHe0LG7YQ0Qx6BAgbEAE"
                    className="hover:underline hover:text-yellow-200"
                  >
                    Museu Picasso Barcelona
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.michelangelofoundation.org/"
                    className="hover:underline hover:text-yellow-200"
                  >
                     The Michelangelo Foundation
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.salvador-dali.org/es/"
                    className="                   hover:underline hover:text-yellow-200"
                  >
                    Fundació Gala-Salvador Dalí
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.wikipedia.org/"
                    className="hover:underline hover:text-yellow-200"
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

