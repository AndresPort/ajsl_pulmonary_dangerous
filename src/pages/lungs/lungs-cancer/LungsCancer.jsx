import "./LungsCancer.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SickLung from "./models-3d/SickLung";
import SickLungsSemiVisibles from "./models-3d/SickLungsSemiVisibles";
import AnimeNurseSweating from "./models-3d/AnimeNurseSweating";
import Doctor from "./models-3d/Doctor";
import Floor from "./models-3d/Floor";
import Lights from "./lights/Lights";
import SpotLight from "./lights/SpotLight";
import MultipleAmbientLights from "./lights/MultipleAmbientLights";
import Tittle from "./texts/Tittle";
import SkyStaging from "./staging/SkyStaging";
import StarsStaging from "./staging/StarsStaging";
import SparklesStaging from "./staging/SparklesStaging";
import TreatmentTitle from "./texts/TreatmentTitle";
import PreventionTittle from "./texts/PreventionTittle";
import TreatmentText from "./texts/TreatmentText";
import PreventionText from "./texts/PreventionText";
import UseSweatStore from "../../../stores/lung-cancer-stores/use-sweat-store";
import { useRef, useEffect } from "react";
import { Html } from "@react-three/drei";
import useSoundStore from "../../../stores/lung-cancer-stores/use-sound-store";

const LungsCancer = () => {
  const nurseRef = useRef();
  const { currentAnimation, setCurrentAnimation } = UseSweatStore();
  const reproducir = useSoundStore((state) => state.reproducir);
  const detener = useSoundStore((state) => state.detener);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key === "s" && currentAnimation === "Sweat") {
        setCurrentAnimation("initialPose");
        detener();
      }

      if (key === "t" && currentAnimation === "SevereCoughLaying") {
        setCurrentAnimation("initialPose");
        detener();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentAnimation, setCurrentAnimation, detener]);

  return (
    <div className="lungs-cancer-page">
      <div className="tittleContainer">
        <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
          {/* <SoftShadows size={40} samples={40} focus={0.8} /> */}
          <Lights />
          <Tittle tittle="Cáncer de Pulmón" />
          <SparklesStaging />
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
              El cáncer de pulmón ocurre cuando células del pulmón crecen sin
              control por mutaciones en su ADN, formando tumores que pueden
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
            <p className="effectsText">
              El cáncer de pulmón causa tos persistente, dificultad para
              respirar, dolor en el pecho y tos con sangre. En etapas avanzadas,
              puede provocar fatiga, pérdida de peso y afectar otros órganos. La
              detección temprana con tomografía de baja dosis mejora la
              supervivencia.
            </p>
          </div>
        </div>
      </section>

      <section className="sickLungsSemiVisiblesSection">
        <div className="content">
          <div className="sickLungsSemiVisiblesTextContainer">
            <h1 className="symptomsTittle">Sintomas</h1>
            <p className="symptomsText">
              Tos persistente, dificultad para respirar, dolor en el pecho, tos
              con sangre, ronquera, fatiga y pérdida de peso sin causa.
            </p>
          </div>
          <div className="sickLungsSemiVisiblesModelContainer">
            <Canvas camera={{ position: [0, 0, 1.3] }} shadows={true}>
              <MultipleAmbientLights />
              <OrbitControls target={[0, 0, 0]} />
              <SickLungsSemiVisibles scale={0.001} />
              <Floor scale={0.001} />
              <SkyStaging />
            </Canvas>
          </div>
          {/* <CoughSound className="btnPlaySound" /> */}
          {/* <h5 className="coughIndications">Presione "P" para parar de toser</h5> */}
        </div>
      </section>

      <section className="animeNurseSection">
        <div className="animeNurseContent">
          <div className="treatmentTextContainer">
            <Canvas
              camera={{ position: [0, 0, 1.7] }}
              className="treatmentTextCanvas"
              shadows={true}
            >
              <TreatmentTitle title={"Tratamiento"} />
              <TreatmentText
                textPart1="-Cirugía"
                textPart2="-Quimioterapia"
                textPart3="-Inmunoterapia"
                textPart4="-Radioterapia"
                className="treatmentText"
              />
            </Canvas>
          </div>
          <div className="animeNurseModelContainer">
            <Canvas camera={{ position: [0, 0.3, 1.7] }} shadows={true}>
              <OrbitControls target={[0, 0, 0]} />
              <SpotLight />
              <AnimeNurseSweating scale={0.022} />
              <Floor scale={0.001} />
              <StarsStaging />
              <Html>
                <button
                  className="btnSweat"
                  onClick={() => {
                    setCurrentAnimation("Sweat");
                    reproducir("/lung-cancer-sounds/TiredSound.mp3");
                  }}
                  title="presione S para parar de sudar"
                >
                  Sudor excesivo
                </button>

                <button
                  className="btnCough"
                  onClick={() => {
                    setCurrentAnimation("SevereCoughLaying");
                    reproducir("/lung-cancer-sounds/CoughSound.mp3");
                  }}
                  title="presione T para parar de toser"
                >
                  Tos muy fuerte
                </button>
              </Html>
            </Canvas>
          </div>
        </div>
      </section>

      <section className="doctorSection">
        <div className="doctorContent">
          <div className="preventionTextContainer">
            <Canvas
              camera={{ position: [0, 0, 1.7] }}
              className="preventionTextCanvas"
              shadows={true}
            >
              <OrbitControls target={[0, 0, 0]} />
              <PreventionTittle textTittle="Prevencion y cuidados" />
              <PreventionText
                text="Evita fumar y la exposición al
               humo de tabaco. Mantén ambientes libres de contaminantes.
                Usa equipo de protección si trabajas con sustancias tóxicas.
                 Haz ejercicio, lleva una dieta saludable y realiza chequeos
                  médicos si tienes factores de riesgo."
              />
            </Canvas>
          </div>

          <div className="doctorModelContainer">
            <Canvas camera={{ position: [0, 0.8, 2.0] }} shadows={true}>
              <OrbitControls target={[0, 0.25, 0]} />
              <Floor scale={0.001} />
              <StarsStaging />
              <Lights />
              <Doctor scale={0.015} />
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LungsCancer;
