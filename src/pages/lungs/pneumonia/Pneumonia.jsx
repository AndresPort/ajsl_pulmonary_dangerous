import React, { useRef, useEffect } from "react";
import "./Pneumonia.css";
import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import PneumoniaLungs from "./models-3d/PneumoniaLungs";
import FirstSectionReader from "./data/data_readers/first_section_reader";
import { pneumoniaFirstSection } from "./data/pneumonia-first-section";
import Recipient from "./models-3d/Recipient";

const Pneumonia = () => {
  const symptomsRef = useRef(null);
  const treatmentRef = useRef(null);
  const preventionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pneumonia-page">
      {/* Section 1: Introduction */}
      <section className="section" id="intro">
        <div className="content">
          <div className="model-container">
            <Canvas camera={{ position: [2, 0, 7] }} shadows={true}>
              <Lights />
              <Controls />
              <PneumoniaLungs scale={2} />
              <Recipient />
            </Canvas>
          </div>
          <div className="text-container">
            <FirstSectionReader data={pneumoniaFirstSection} />
            <button onClick={() => scrollToSection(symptomsRef)}>Ver más</button>
          </div>
        </div>
      </section>

      {/* Section 2: Symptoms */}
      <section className="section" ref={symptomsRef} id="symptoms">
        <div className="content">
          <div className="model-container">
            {/* Placeholder for 3D model */}
          </div>
          <div className="text-container">
            <h2>Síntomas</h2>
            <p>
              Dificultad para respirar, tos con flema, fiebre, escalofríos y
              dolor en el pecho son síntomas comunes de la neumonía.
            </p>
            <button onClick={() => scrollToSection(treatmentRef)}>Ver más</button>
          </div>
        </div>
      </section>

      {/* Section 3: Treatment */}
      <section className="section" ref={treatmentRef} id="treatment">
        <div className="content">
          <div className="model-container">
            {/* Placeholder for 3D model */}
          </div>
          <div className="text-container">
            <h2>Tratamiento</h2>
            <p>
              El tratamiento incluye antibióticos, antivirales o antifúngicos,
              dependiendo de la causa, junto con reposo y cuidados médicos.
            </p>
            <button onClick={() => scrollToSection(preventionRef)}>Ver más</button>
          </div>
        </div>
      </section>

      {/* Section 4: Prevention */}
      <section className="section" ref={preventionRef} id="prevention">
        <div className="content">
          <div className="model-container">
            {/* Placeholder for 3D model */}
          </div>
          <div className="text-container">
            <h2>Prevención</h2>
            <p>
              Vacunación, higiene adecuada y evitar el contacto con personas
              infectadas son medidas clave para prevenir la neumonía.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pneumonia;