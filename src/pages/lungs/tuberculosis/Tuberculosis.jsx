import React, { useRef, useState, useEffect } from 'react';
import './Tuberculosis.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Lungs } from './models-3d/Lungs';
import { ManCoughing } from './models-3d/ManCoughing';
import { OxygenTheraphy } from './models-3d/OxygenTheraphy';
import LightsLungs from './lights/LightsLungs';
import Floor from './models-3d/Floor';
import FloorMan from './models-3d/FloorMan'
import LightsManCoughing from './lights/LightsManCoughing';
import StagingMan from './staging/StagingMan';
import Button from './texts/Button';
import { KeyboardControls } from '@react-three/drei';
import Controls from './controls/Controls';
import useManStore from '/src/stores/tuberculosis-stores/use-man-store.js';
import LightsOxygen from './lights/LightsOxygen';
import Title from './texts/Title';
import StagingOxygen from './staging/StagingOxygen';
import Encabezado from './texts/Encabezado';
import Titulo from './texts/Titulo';

const Tuberculosis = () => {
  const sintomasRef = useRef(null);
  const tratamientoRef = useRef(null);
  const { currentAnimation, setCurrentAnimation } = useManStore();
  const [useLungsLight, setUseLungsLight] = useState(false);
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
      if (key === "KeyL") {
        setUseLungsLight(prev => !prev); // Alternar entre luces
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
        <Canvas camera={{ position: [0, 1, 5] }} shadows={true}>
          <OrbitControls target={[0, 0, 0]} />
          <Encabezado Encabezado={"Tuberculosis"}/>
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
          <Canvas camera={{ position: [0, 3, 7] }} shadows={true}>
            <OrbitControls target={[0, 0, 0]} />
            <Controls />
            <StagingMan />
            <LightsManCoughing />
            <Titulo Titulo={"¿Tienes alguno de estos síntomas?"}/>
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
            <button onClick={() => scrollToSection(tratamientoRef)}>Ver más</button> 
          </div>
        </div>
      </section>

      {/* Sección 3: Tratamientos */}
      <section className="section" ref={tratamientoRef} id="tratamiento">
        <div className="content">
          <div className="model-container"> 
            <Canvas camera={{ position: [0, 2, 6] }} shadows={true}>
            <OrbitControls target={[0, 0, 0]} />
            <Controls />
            <StagingOxygen />
            {useLungsLight ? <LightsLungs /> : <LightsOxygen />}
            <OxygenTheraphy scale={4} />
            <Title title={"La oxigenoterapia es un tratamiento \n complementario usado en pacientes \n con tuberculosis pulmonar severa"}/>
            <Floor />
            </Canvas>
          </div>
          <div className="text-container">
            <h2>Tratamiento</h2>
            <p>
              El tratamiento de la tuberculosis implica el uso de antibióticos durante un período prolongado, 
              generalmente de seis a nueve meses. Es crucial seguir estrictamente las indicaciones médicas y tomar 
              todos los medicamentos como se prescribe para evitar la reaparición de la enfermedad y el desarrollo de resistencia a los antibióticos. 
            </p>
            {/* <button onClick={() => scrollToSection(prevencionRef)}>Ver más</button> */}
          </div>
        </div>
      </section> 

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

