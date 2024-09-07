import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const artMovements = [
  {
    title: "Renaissance",
    period: "14th - 17th Century",
    description: "Revival of classical art and humanism.",
    painters: ["Leonardo da Vinci", "Michelangelo Buonarroti"],
  },
  {
    title: "Post-Impressionism",
    period: "Late 19th Century",
    description: "Expressive, bold colors and emotive brushstrokes.",
    painters: ["Vincent van Gogh"],
  },
  {
    title: "Cubism",
    period: "Early 20th Century",
    description: "Geometric shapes and fragmented perspectives.",
    painters: ["Pablo Picasso"],
  },
  {
    title: "High Renaissance",
    period: "Late 15th - Early 16th Century",
    description: "Peak of Renaissance with balance and grandeur.",
    painters: ["Michelangelo Buonarroti"],
  },
  {
    title: "Surrealism",
    period: "20th Century",
    description: "Explores the unconscious mind and dreams.",
    painters: ["Salvador Dalí"],
  },
];

const ArtTimeline = () => {
  const timelineRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="p-8 flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Timeline of Art Movements</h2>
        <div className="relative" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute h-full w-[2px] bg-[#8b704d] left-1/2 transform -translate-x-1/2"></div>
          {artMovements.map((movement, index) => (
            <div
              key={movement.title}
              data-aos={isDesktop ? (index % 2 === 0 ? "fade-right" : "fade-left") : "fade-up"}
              data-aos-duration="1000"
              className={`timeline-item relative mb-12 p-6 bg-white shadow-md rounded-lg max-w-[90%] md:max-w-md mx-auto md:mx-0 text-center md:text-left ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              {/* Horizontal Line */}
              <div
                className={`hidden xl:block absolute top-1/2 transform -translate-y-1/2 w-[190px] h-[2px] bg-[#8b704d] ${
                  index % 2 === 0 ? "right-full mr-[2px]" : "left-full ml-[2px]"
                }`}
              ></div>

              <h3 className="text-xl font-semibold text-[#8b704d]">{movement.title}</h3>
              <p className="text-sm text-gray-500">{movement.period}</p>
              <p className="mt-2">{movement.description}</p>
              <ul className="mt-2">
                {movement.painters.map((painter) => (
                  <li key={painter} className="text-gray-700">
                    {painter}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtTimeline;
