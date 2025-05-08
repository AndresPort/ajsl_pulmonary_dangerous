import "./LungsCancer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import SickLung from "./models-3d/SickLung";
import SickLungsSemiVisibles from "./models-3d/SickLungsSemiVisibles";
import Floor from "./models-3d/Floor";
import Lights from "./lights/Lights";

const LungsCancer = () => {
  return (
    <div className="lungs-cancer-page">
      <h1>Cancer de pulmón</h1>
      <section className="section1" id="intro">
        <div className="content">
          <div className="model-container">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
              <Lights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLung scale={0.001} />
              <Floor />
            </Canvas>
          </div>
          <div className="text-container">
            <h1>¿Qué es el cancer de pulmón?</h1>
            <p className="meanText">
            El cáncer de pulmón ocurre cuando células del pulmón crecen
             sin control por mutaciones en su ADN, formando tumores que pueden
              invadir otros tejidos y causar metástasis.​
            </p>

            <h1>Principales Causas</h1>
            <p className="causesText">
              -Tabaquismo
              <br /> -Exposición al humo de segunda mano
              <br /> -Exposición a sustancias noscivas
              <br /> -Contaminación del aire
              <br /> -Factores genéticos y enfermedades pulmonares previas
            </p>
            <h1>Efectos en el cuerpo humano</h1>
            <p className="effectsText">El cáncer de pulmón causa tos persistente, dificultad para respirar,
               dolor en el pecho y tos con sangre. En etapas avanzadas, puede provocar fatiga,
               pérdida de peso y afectar otros órganos. La detección temprana con tomografía
               de baja dosis mejora la supervivencia.         
            </p>
          </div>
        </div>
      </section>

      <section className="section2" id="intro">
        <div className="content">
          <div className="text-container">
            <h1 className="symptomsTittle">Sintomas</h1>
            <p className="symptomsText">
            Tos persistente, dificultad para respirar, dolor en el pecho, tos con sangre, ronquera, fatiga y pérdida de peso sin causa.​
            </p>
          </div>
          <div className="model-container">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
              <Lights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLungsSemiVisibles scale={0.001} />
              <Floor />
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LungsCancer;
