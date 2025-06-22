import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./lights/Lights";
import SkyStaging from "./staging/SkyStaging";
import Floor from "./models-3d/quiz-page/Floor";
import SickLungsSemiVisibles from "./models-3d/quiz-page/SickLungsSemiVisibles";
import PneumoniaLungs from "./models-3d/quiz-page/PneumoniaLungs";
import SaneLungs from "./models-3d/quiz-page/SaneLungs";
import TuberculosisLung from "./models-3d/quiz-page/TuberculosisLung";

import "./QuizPage.css";

const QuizPage = () => {
  return (
    <div className="quizPageContainer">
      <h1 className="principalTitle">
        Selecciona la única respuesta que creas correcta y diviertete
      </h1>
      <section className="firstQuestionSection">
        <h1 className="titleFirstQuestion">
          Seleccione el boton al que le corresponda un pulmón con cancer
        </h1>
        <div className="firstQuestionCanvasContainer">
          <Canvas
            className="firstQuestionCancerCanvas"
            camera={{ position: [0, 0, 1.3] }}
            shadows={true}
          >
            <OrbitControls target={[0, 0, 0]} />
            <SickLungsSemiVisibles scale={0.001} />
            <SkyStaging />
            <Lights />
          </Canvas>

          <Canvas className="firstQuestionPneumoniaCanvas" shadows={true}>
            <PneumoniaLungs />
            <OrbitControls target={[0, 0, 0]} />
            <SkyStaging />
            <Lights />
          </Canvas>

          <Canvas className="firstQuestionECPCanvas" shadows={true}>
            <SaneLungs />
            <OrbitControls target={[0, 0, 0]} />
            <SkyStaging />
            <Lights />
          </Canvas>

          <Canvas className="firstQuestionTuberculosisCanvas" shadows={true}>
            <TuberculosisLung />
            <OrbitControls target={[0, 0, 0]} />
            <SkyStaging />
            <Lights />
          </Canvas>
        </div>

        <div className="firstQuestionButtonsContainer">
            <button className="firstQuestionCancerButton">1</button>
            <button className="firstQuestionPneumoniaButton">2</button>
            <button className="firstQuestionECPButton">3</button>
            <button className="firstQuestionTuberculosisButton">4</button>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
