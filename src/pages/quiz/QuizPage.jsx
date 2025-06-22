import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import Lights from "./lights/Lights";
import SkyStaging from "./staging/SkyStaging";
import Floor from "./models-3d/quiz-page/Floor";
import Doctor from "./models-3d/quiz-page/Doctor";
import SickLungsSemiVisibles from "./models-3d/quiz-page/SickLungsSemiVisibles";
import PneumoniaLungs from "./models-3d/quiz-page/PneumoniaLungs";
import SaneLungs from "./models-3d/quiz-page/SaneLungs";
import TuberculosisLung from "./models-3d/quiz-page/TuberculosisLung";

import "./QuizPage.css";

const QuizPage = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });
  const [ref5, inView5] = useInView({ threshold: 0.1 });

  return (
    <div className="quizPageContainer">
      <h1 className="principalTitle">
        Selecciona la única respuesta que creas correcta y diviértete
      </h1>

      {/* Primera sección */}
      <section className="firstQuestionSection" ref={ref1}>
        <h1 className="titleFirstQuestion">Seleccione el botón al que le corresponda un pulmón con cáncer</h1>
        <div className="firstQuestionCanvasContainer">
          {inView1 && (
            <>
              <Canvas className="firstQuestionCancerCanvas" camera={{ position: [0, 0, 1.3] }} shadows>
                <OrbitControls target={[0, 0, 0]} />
                <SickLungsSemiVisibles scale={0.001} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="firstQuestionPneumoniaCanvas" shadows>
                <PneumoniaLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="firstQuestionECPCanvas" shadows>
                <SaneLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="firstQuestionTuberculosisCanvas" shadows>
                <TuberculosisLung />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
            </>
          )}
        </div>
        <div className="firstQuestionButtonsContainer">
          <button className="firstQuestionCancerButton">1</button>
          <button className="firstQuestionPneumoniaButton">2</button>
          <button className="firstQuestionECPButton">3</button>
          <button className="firstQuestionTuberculosisButton">4</button>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="secondQuestionSection" ref={ref2}>
        <h1 className="titleSecondQuestion">Seleccione el botón al que le corresponda un pulmón con neumonía</h1>
        <div className="secondQuestionCanvasContainer">
          {inView2 && (
            <>
              <Canvas className="secondQuestionCancerCanvas" camera={{ position: [0, 0, 1.3] }} shadows>
                <OrbitControls target={[0, 0, 0]} />
                <SickLungsSemiVisibles scale={0.001} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="secondQuestionPneumoniaCanvas" shadows>
                <PneumoniaLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="secondQuestionECPCanvas" shadows>
                <SaneLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="secondQuestionTuberculosisCanvas" shadows>
                <TuberculosisLung />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
            </>
          )}
        </div>
        <div className="secondQuestionButtonsContainer">
          <button className="secondQuestionCancerButton">1</button>
          <button className="secondQuestionPneumoniaButton">2</button>
          <button className="secondQuestionECPButton">3</button>
          <button className="secondQuestionTuberculosisButton">4</button>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="thirdQuestionSection" ref={ref3}>
        <h1 className="titleThirdQuestion">Seleccione el botón al que le corresponda un pulmón con Enfermedad crónica pulmonar</h1>
        <div className="thirdQuestionCanvasContainer">
          {inView3 && (
            <>
              <Canvas className="thirdQuestionCancerCanvas" camera={{ position: [0, 0, 1.3] }} shadows>
                <OrbitControls target={[0, 0, 0]} />
                <SickLungsSemiVisibles scale={0.001} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="thirdQuestionPneumoniaCanvas" shadows>
                <PneumoniaLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="thirdQuestionECPCanvas" shadows>
                <SaneLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="thirdQuestionTuberculosisCanvas" shadows>
                <TuberculosisLung />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
            </>
          )}
        </div>
        <div className="thirdQuestionButtonsContainer">
          <button className="thirdQuestionCancerButton">1</button>
          <button className="thirdQuestionPneumoniaButton">2</button>
          <button className="thirdQuestionECPButton">3</button>
          <button className="thirdQuestionTuberculosisButton">4</button>
        </div>
      </section>

      {/* Cuarta sección */}
      <section className="fourthQuestionSection" ref={ref4}>
        <h1 className="titleFourthQuestion">Seleccione el botón al que le corresponda un pulmón con Tuberculosis</h1>
        <div className="fourthQuestionCanvasContainer">
          {inView4 && (
            <>
              <Canvas className="fourthQuestionCancerCanvas" camera={{ position: [0, 0, 1.3] }} shadows>
                <OrbitControls target={[0, 0, 0]} />
                <SickLungsSemiVisibles scale={0.001} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="fourthQuestionPneumoniaCanvas" shadows>
                <PneumoniaLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="fourthQuestionECPCanvas" shadows>
                <SaneLungs />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
              <Canvas className="fourthQuestionTuberculosisCanvas" shadows>
                <TuberculosisLung />
                <OrbitControls target={[0, 0, 0]} />
                <SkyStaging />
                <Lights />
              </Canvas>
            </>
          )}
        </div>
        <div className="fourthQuestionButtonsContainer">
          <button className="fourthQuestionCancerButton">1</button>
          <button className="fourthQuestionPneumoniaButton">2</button>
          <button className="fourthQuestionECPButton">3</button>
          <button className="fourthQuestionTuberculosisButton">4</button>
        </div>
      </section>

      {/* Quinta sección */}
      <section className="fifthQuestionSection" ref={ref5}>
        <h1 className="titleFifthQuestion">¿A qué sección corresponde la animación del siguiente personaje?</h1>
        <div className="fifthQuestionCanvasContainer">
          {inView5 && (
            <Canvas className="fifthQuestionDoctorCanvas" camera={{ position: [0, -1, 2] }} shadows>
              <OrbitControls target={[0, 0, 0]} />
              <Doctor scale={0.015} />
              <Floor />
              <SkyStaging />
              <Lights />
            </Canvas>
          )}
        </div>
        <div className="fifthQuestionButtonsContainer">
          <button className="fifthQuestionCausesButton">Causas</button>
          <button className="fifthQuestionSymptomsButton">Síntomas</button>
          <button className="fifthQuestionTreatmentButton">Tratamiento</button>
          <button className="fifthQuestionPreventionButton">Prevención y cuidados</button>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
