import React, { useRef } from 'react';
import './Tuberculosis.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Lungs } from './models-3d/Lungs';
import LightsLungs from './lights/LightsLungs';
import Floor from './models-3d/Floor';


const Tuberculosis = () => {
  const sintomasRef = useRef(null);
  const tratamientoRef = useRef(null);
  const prevencionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="tuberculosis-page">
  {/* Sección 1: ¿Qué es la Tuberculosis? */}
  <section className="section" id="intro">
    <div className="content">
      <div className="model-container">
        <Canvas camera={{ position: [0, 1, 4] }} shadows={true}>
          <OrbitControls target={[0, 0, 0]} />
          <LightsLungs />
          <Lungs scale={20} />
          <Floor />
        </Canvas>
      </div>
      <div className="text-container">
        <h1>¿Qué es la Tuberculosis?</h1>
        <p>
          La tuberculosis (TB) es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis. 
          Afecta principalmente los pulmones pero puede dañar otros órganos.
        </p>
        <button onClick={() => scrollToSection(sintomasRef)}>Ver más</button>
      </div>
    </div>
  </section>

      {/* Sección 2: Síntomas */}
      <section className="section" ref={sintomasRef} id="sintomas">
        <div className="content">
          <div className="model-container">
            {/* Aquí irá el modelo 3D de síntomas */}
          </div>
          <div className="text-container">
            <h2>Síntomas</h2>
            <p>
              Tos persistente, fiebre, sudores nocturnos, pérdida de peso y fatiga son síntomas frecuentes de tuberculosis pulmonar.
            </p>
            <button onClick={() => scrollToSection(tratamientoRef)}>Ver más</button>
          </div>
        </div>
      </section>

      {/* Sección 3: Tratamientos */}
      <section className="section" ref={tratamientoRef} id="tratamiento">
        <div className="content">
          <div className="model-container">
            {/* Aquí irá el modelo 3D de tratamiento */}
          </div>
          <div className="text-container">
            <h2>Tratamiento</h2>
            <p>
              Se basa en una combinación de antibióticos administrados durante un periodo mínimo de 6 meses, con seguimiento médico estricto.
            </p>
            <button onClick={() => scrollToSection(prevencionRef)}>Ver más</button>
          </div>
        </div>
      </section>

      {/* Sección 4: Prevención */}
      <section className="section" ref={prevencionRef} id="prevencion">
        <div className="content">
          <div className="model-container">
            {/* Aquí irá el modelo 3D de prevención */}
          </div>
          <div className="text-container">
            <h2>Prevención</h2>
            <p>
              La vacunación (BCG), el tratamiento temprano y las medidas de control como el uso de mascarillas ayudan a prevenir la transmisión.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tuberculosis;

