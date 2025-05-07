import "./LungsCancer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import SickLung from "./models-3d/SickLung";
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
              <SoftShadows size={40} samples={40} focus={0.8} />
              <Lights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLung scale={0.001} />
              <Floor />
            </Canvas>
          </div>
          <div className="text-container">
            <h1>¿Qué es el cancer de pulmón?</h1>
            <p>
              ​El cáncer de pulmón es una enfermedad en la que las células del
              tejido pulmonar crecen de manera descontrolada debido a mutaciones
              en su ADN. Estas alteraciones permiten que las células se dividan
              sin control y eviten la muerte celular programada, formando
              tumores que pueden invadir tejidos cercanos y diseminarse a otras
              partes del cuerpo (metástasis) .​
            </p>

            <h1>Principales Causas</h1>
            <p>
              -Tabaquismo
              <br /> -Exposición al humo de segunda mano
              <br /> -Exposición a sustancias noscivas
              <br /> -Contaminación del aire
              <br /> -Factores genéticos y enfermedades pulmonares previas
            </p>
            <h1>Efectos en el cuerpo humano</h1>
            <p>
              El cáncer de pulmón puede causar síntomas respiratorios como tos
              persistente, dificultad para respirar, dolor en el pecho y tos con
              sangre. A medida que avanza, puede provocar pérdida de peso,
              fatiga y, si se disemina, afectar otros órganos, causando dolor
              óseo o síntomas neurológicos . La detección temprana mediante
              tomografías computarizadas de baja dosis puede mejorar las tasas
              de supervivencia, ya que permite identificar la enfermedad en
              etapas iniciales, cuando es más tratable .​
            </p>
          </div>
        </div>
      </section>

      <section className="section2" id="intro">
        <div className="content">
          <div className="text-container">
            <h1>Sintomas</h1>
            <p>
            Tos persistente, dificultad para respirar, dolor en el pecho, tos con sangre, ronquera, fatiga y pérdida de peso sin causa..​
            </p>

          </div>
          <div className="model-container">
            {/* <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              <SoftShadows size={40} samples={40} focus={0.8} />
              <Lights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLung scale={0.001} />
              <Floor />
            </Canvas> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LungsCancer;
