import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/Models/Experience";
import { UI } from "../components/Models/UI";

const CanvasPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const canvasWidth = windowWidth < 768 ? windowWidth * 0.9 : 800;
  const canvasHeight = windowWidth < 768 ? windowHeight * 0.4 : 500; 

  const positionX = windowWidth < 768 ? -0.1 : 0;

  return (
    <section className="relative py-10 px-5">
      <h2 className="text-center text-3xl font-bold mb-6">3D BUKU</h2>
      <div className="relative">
        <div className="relative mx-auto w-full" style={{ maxWidth: canvasWidth }}>
          <Canvas
            shadows
            camera={{ position: [0, 1, 3], fov: 45 }}
            style={{ height: canvasHeight }}
          >
            <group position={[positionX, 0, 0]}>
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </group>
          </Canvas>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <UI />
        </div>
      </div>
    </section>
  );
};

export default CanvasPage;
