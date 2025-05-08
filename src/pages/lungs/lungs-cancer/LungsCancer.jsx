import "./LungsCancer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import SickLung from "./models-3d/SickLung";
import SickLungsSemiVisibles from "./models-3d/SickLungsSemiVisibles";
import Floor from "./models-3d/Floor";
import Lights from "./lights/Lights";
import MultipleAmbientLights from "./lights/MultipleAmbientLights";
import Tittle from "./texts/Tittle";
import SkyStaging from "./staging/SkyStaging";
import SparklesStaging from "./staging/SparklesStaging";

const LungsCancer = () => {
  return (
    <div className="lungs-cancer-page">
      <div className="tittleContainer">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true} >
              {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
              <Lights />
              <Tittle tittle="Cáncer de Pulmón" />
              <SparklesStaging/>
            </Canvas>
          </div>
      <section className="SickLungSection">
        <div className="content">
          <div className="sickLungModelContainer">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
              <Lights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLung scale={0.001} />
              <Floor scale={0.001} />
            </Canvas>
          </div>
          <div className="sickLungTextContainer">
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

      <section className="SickLungsSemiVisiblesSection">
        <div className="content">
          <div className="SickLungsSemiVisiblesTextContainer">
            <h1 className="symptomsTittle">Sintomas</h1>
            <p className="symptomsText">
            Tos persistente, dificultad para respirar, dolor en el pecho, tos con sangre, ronquera, fatiga y pérdida de peso sin causa.​
            </p>
          </div>
          <div className="SickLungsSemiVisiblesModelContainer">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
              <MultipleAmbientLights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLungsSemiVisibles scale={0.001} />
              <Floor scale={0.001} /> 
              <SkyStaging />
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LungsCancer;
