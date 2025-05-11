import React, { useRef, useState, useEffect } from 'react';
import './Tuberculosis.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Lungs } from './models-3d/Lungs';
import { ManCoughing } from './models-3d/ManCoughing';
import LightsLungs from './lights/LightsLungs';
import Floor from './models-3d/Floor';
import FloorMan from './models-3d/FloorMan'
import LightsManCoughing from './lights/LightsManCoughing';
import StagingMan from './staging/StagingMan';
import Button from './texts/Button';
import { KeyboardControls } from '@react-three/drei';
import Controls from './controls/Controls';
import useManStore from '/src/stores/tuberculosis-stores/use-man-store.js';

const Tuberculosis = () => {
  const sintomasRef = useRef(null);
  const { currentAnimation, setCurrentAnimation } = useManStore();
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const keyMap = [
    { name: 'stopCough', keys: ['Space', 'r', 'R'] }
  ];


  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.code;

      if ((key === 'Space' || key === 'KeyR') && currentAnimation !== 'Normal') {
        event.preventDefault();
        setCurrentAnimation('Normal');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentAnimation]);

  return (
    <div className="tuberculosis-page">
  {/* Sección 1: ¿Qué es la Tuberculosis? */}
  <section className="section" id="intro">
    <div className="content">
      <div className="model-container">
        <Canvas camera={{ position: [0, 1, 4] }} shadows={true}>
          <OrbitControls target={[0, 0, 0]} />
          <Controls />
          <LightsLungs />
          <Lungs scale={20} />
          <Floor />
        </Canvas>
      </div>
      <div className="text-container">
        <h2>¿Qué es la Tuberculosis?</h2>
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
          <KeyboardControls map={keyMap}>
          <Canvas camera={{ position: [0, 3, 6.85] }} shadows={true}>
            <OrbitControls target={[0, 0, 0]} />
            <Controls />
            <StagingMan />
            <LightsManCoughing />
            <ManCoughing scale={3.3}/>
            <Button/>
            <FloorMan />
          </Canvas>
          </KeyboardControls>
          </div>
          <div className="text-container">
            <h2>Síntomas</h2>
            <p>
            La tos que dura más de tres semanas es un síntoma común, La tos con sangre (hemoptisis) 
            o moco es un síntoma que indica que la infección ha llegado a los pulmones, ademas de sintomas como fiebre, 
            sudores nocturnos, pérdida de peso y fatiga.
            </p>
            {/* <button onClick={() => scrollToSection(tratamientoRef)}>Ver más</button> */}
          </div>
        </div>
      </section>

      {/* Sección 3: Tratamientos */}
      {/* <section className="section" ref={tratamientoRef} id="tratamiento">
        <div className="content">
          <div className="model-container"> */}
            {/* Aquí irá el modelo 3D de tratamiento */}
          {/* </div>
          <div className="text-container">
            <h2>Tratamiento</h2>
            <p>
              Se basa en una combinación de antibióticos administrados durante un periodo mínimo de 6 meses, con seguimiento médico estricto.
            </p>
            <button onClick={() => scrollToSection(prevencionRef)}>Ver más</button>
          </div>
        </div>
      </section> */}

      {/* Sección 4: Prevención */}
      {/* <section className="section" ref={prevencionRef} id="prevencion">
        <div className="content">
          <div className="model-container"> */}
            {/* Aquí irá el modelo 3D de prevención */}
          {/* </div>
          <div className="text-container">
            <h2>Prevención</h2>
            <p>
              La vacunación (BCG), el tratamiento temprano y las medidas de control como el uso de mascarillas ayudan a prevenir la transmisión.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Tuberculosis;

