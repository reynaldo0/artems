
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

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

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll(".timeline-item");


    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Timeline of Art Movements</h2>
      <div className="relative" ref={timelineRef}>

        <div className="absolute h-full w-1 bg-[#8b704d] left-1/2 transform -translate-x-1/2"></div>
        {artMovements.map((movement, index) => (
          <motion.div
            key={movement.title}
            className={`timeline-item mb-12 p-6 bg-white shadow-md rounded-lg max-w-md ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
         
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArtTimeline;
