import { useRef, useEffect, useState } from "react";
import "./Pneumonia.css";
import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import PneumoniaLungs from "./models-3d/PneumoniaLungs";
import PersonCoughing from "./models-3d/PersonCoughing";
import Recipient from "./models-3d/Recipient";
import Staging from "./staging/Staging";
import Button from "./models-3d/html-3d/Button";
import Sunlight from "./lights/Sunlight";
import SparklesEffect from "./staging/Sparkles";
import LungsModel from "./models-3d/LungsModel";
import Title from "./models-3d/html-3d/Title";
import TreatmentText from "./models-3d/html-3d/TreatmentText";
import data from "./data/data.json"; // Importing data from JSON file

const Pneumonia = () => {
  const symptomsRef = useRef(null);
  const treatmentRef = useRef(null);
  const preventionRef = useRef(null);
  const [showSparkles, setShowSparkles] = useState(false);
  const [showLungsModel, setShowLungsModel] = useState(false);
  // Nuevo estado para transición
  const [fade, setFade] = useState(1); // 1 = visible, 0 = invisible
  const [pendingSwitch, setPendingSwitch] = useState(false);
  // Función para cambiar entre textos
  const [treatmentText, setTreatmentText] = useState(false);


  // Función para desplazar a una sección específica
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSymptomsClick = () => {
    setShowSparkles(true); // Show sparkles when the button is clicked
  };

  const handleReset = () => {
    setShowSparkles(false); // Hide sparkles when "r" is pressed
  };

  // Maneja el cambio de modelo con transición
  const handleModelSwitch = () => {
    setFade(0); // Inicia fade out
    setPendingSwitch(true);
  };

  // Efecto para cambiar modelo después del fade out
  useEffect(() => {
    if (fade === 0 && pendingSwitch) {
      const timeout = setTimeout(() => {
        setShowLungsModel((prev) => !prev);
        setTreatmentText((prev) => !prev); // Cambia el texto del tratamiento
        setFade(1); // Inicia fade in
        setPendingSwitch(false);
      },300); // Duración del fade out en ms
      return () => clearTimeout(timeout);
    }
  }, [fade, pendingSwitch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pneumonia-page">
      <section className="section" id="intro">
        <div className="content">
          <div className="model-container">
            <Canvas camera={{ position: [2, 0, 7] }} shadows={true}>
              <Lights />
              <Controls />
              <PneumoniaLungs scale={2} />
              <Recipient />
              <Staging />
            </Canvas>
          </div>
          <div className="text-container">
            <h1>Neumonía</h1>
            <p>
              La neumonía es una infección que inflama los sacos de aire en uno o ambos pulmones. Los sacos de aire pueden llenarse de líquido o pus, lo que dificulta la respiración y puede causar tos con flema, fiebre y escalofríos. La neumonía puede ser causada por bacterias, virus u hongos, y su gravedad varía desde leve hasta potencialmente mortal. El tratamiento depende de la causa y la gravedad de la enfermedad.
            </p>
            <button onClick={() => scrollToSection(symptomsRef)}>Ver más</button>
          </div>
        </div>
      </section>

      <section className="section" ref={symptomsRef} id="symptoms">
        <div className="content">
          <div className="model-container">
            <Canvas camera={{ position: [-8, 3, 10] }} shadows={true}>
              <Sunlight />
              <Controls />
              <Title title="Sintomas" />
              <PersonCoughing scale={5} position={[0, -3, 0]} />
              <Button onSymptomsClick={handleSymptomsClick} onReset={handleReset} />
              {showSparkles && <SparklesEffect />}
              <Staging />
              <Recipient />
            </Canvas>
          </div>
          <div className="text-container">
            <h2>Síntomas</h2>
            <p>
              Los síntomas de la neumonía incluyen dificultad para respirar, tos con flema, fiebre y dolor en el pecho. 
              En casos graves, puede causar fatiga extrema y labios azulados por falta de oxígeno. 
              Es importante buscar atención médica si estos síntomas persisten o empeoran.
            </p>
            <button onClick={() => scrollToSection(treatmentRef)}>Ver más</button>
          </div>
        </div>
      </section>

      <section className="section" ref={treatmentRef} id="treatment">
        <div className="content">
          <div className="model-container" style={{ transition: "opacity 0.3s", opacity: fade }}>
            <Canvas camera={{ position: [2, 0, 7] }}  shadows={true}>
              <Sunlight />
              <Controls />
              {/* Renderizado condicional de modelos */}
              {showLungsModel ? <LungsModel position={[3,0,0]} /> : <PneumoniaLungs position={[3,0,0]}/>}
              <Staging />
              <Recipient />
              <TreatmentText text={treatmentText ? (data.despues_tratamiento):(data.antes_tratamiento)} />
            </Canvas>
            {/* Botón para alternar modelos */}
            <button
              onClick={handleModelSwitch}
              disabled={fade !== 1} // Deshabilita durante la transición
            >
              {showLungsModel ? "Antes" : "Después"}
            </button>
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