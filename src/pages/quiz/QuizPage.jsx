import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import Lights from "./lights/Lights";
import SkyStaging from "./staging/SkyStaging";
import Floor from "./models-3d/quiz-page/Floor";
import Doctor from "./models-3d/quiz-page/Doctor";
import Nurse from "./models-3d/quiz-page/Nurse";
import Chair from "./models-3d/quiz-page/Chair";
import PersonCoughing from "./models-3d/quiz-page/PersonCoughing";
import OxygenTheraphy from "./models-3d/quiz-page/OxygenTheraphy";
import SickLungsSemiVisibles from "./models-3d/quiz-page/SickLungsSemiVisibles";
import PneumoniaLungs from "./models-3d/quiz-page/PneumoniaLungs";
import SaneLungs from "./models-3d/quiz-page/SaneLungs";
import TuberculosisLung from "./models-3d/quiz-page/TuberculosisLung";
import useQuizStore from "../../stores/use-quiz-store";
import useAuthStore from "../../stores/use-auth-store";
import allQuestions from "./allQuestions";
import { useNavigate } from "react-router-dom";
import "./QuizPage.css";

  const QuizPage = () => {
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const [ref5, inView5] = useInView({ threshold: 0.1 });
    const [ref6, inView6] = useInView({ threshold: 0.1 });
    const [ref7, inView7] = useInView({ threshold: 0.1 });
    const [ref8, inView8] = useInView({ threshold: 0.1 });
    const { sendAnswer, selectedAnswers, setSelectedAnswer } = useQuizStore();
    const { userLooged } = useAuthStore();
    const navigate = useNavigate();

    const renderButtons = (questionIndex) => {
      const question = allQuestions[questionIndex];
      const selectedOption = selectedAnswers[question.id]; // lo que el usuario marcó
      const isQuizFinished = Object.keys(selectedAnswers).length === allQuestions.length;

      return (
        <div className="buttonsGrid">
          {question.options.map((option, index) => {
            const isThisSelected = selectedOption === option;
            const isCorrectOption = option === question.correctOption;
            let buttonClass = "option-button";

            // Agregar colores si el quiz terminó
            if (isQuizFinished && isThisSelected) {
              buttonClass += isCorrectOption ? " correct-answer" : " incorrect-answer";
            } else if (isThisSelected) {
              buttonClass += " selected";
            } else if (selectedOption) {
              buttonClass += " disabled-unselected";
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => {
                  setSelectedAnswer(question.id, option);
                  handleAnswer(question, option);
                }}
                disabled={!!selectedOption && !isThisSelected}
              >
                {option}
              </button>
            );
          })}
        </div>
      );
    };


    const totalCorrect = allQuestions.filter(
        (q) => selectedAnswers[q.id] === q.correctOption
      ).length;
      const totalIncorrect = allQuestions.length - totalCorrect;

    const totalQuestions = allQuestions.length;
    const totalAnswered = Object.keys(selectedAnswers).length;

    const correctAnswers = allQuestions.filter((q) => {
      const userAnswer = selectedAnswers[q.id];
      return userAnswer === q.correctOption;
    }).length;

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  // Calificación (puedes cambiar esta lógica)
  let grade = "N/A";
  if (percentage >= 90) grade = "Excelente";
  else if (percentage >= 75) grade = "Muy bien";
  else if (percentage >= 50) grade = "Regular";
  else grade = "Necesita mejorar";

    const handleAnswer = async (question, selectedOption) => {
      if (!userLooged) {
        console.error("Usuario no autenticado");
        return;
      }

      const isCorrect = selectedOption === question.correctOption;

      const newAnswer = {
        questionId: question.id,
        questionText: question.text,
        selectedOption,
        isCorrect,
      };

      try {
    const token = await userLooged.getIdToken();

    // ✅ FETCH CORRECTO
    await fetch("https://backend-ajls.onrender.com/api/quizzes/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ newAnswer, totalQuestions })
    });

  } catch (err) {
    console.error("Error enviando respuesta", err);
  }
};

    const handleRestart = () => {
      useQuizStore.getState().resetQuiz();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div className="quizPageContainer">
        <h1 className="principalTitle">
          Selecciona la única respuesta que creas correcta y diviértete <br />
          ¡¡No respondas sin estar seguro, no puedes cambiar tu respuesta!!
        </h1>

        {/* Primera sección */}
        <section className="firstQuestionSection" ref={ref1}>
          <h1 className="titleFirstQuestion">
            Seleccione el botón al que le corresponda un pulmón con cáncer
          </h1>
          <div className="firstQuestionCanvasContainer">
            {inView1 && (
              <>
                <Canvas
                  className="firstQuestionCancerCanvas"
                  camera={{ position: [0, 0, 1.3] }}
                  shadows
                >
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
          <div className="firstQuestionButtonsContainer">{renderButtons(0)}</div>
        </section>

        {/* Segunda sección */}
        <section className="secondQuestionSection" ref={ref2}>
          <h1 className="titleSecondQuestion">
            Seleccione el botón al que le corresponda un pulmón con neumonía
          </h1>
          <div className="secondQuestionCanvasContainer">
            {inView2 && (
              <>
                <Canvas
                  className="secondQuestionCancerCanvas"
                  camera={{ position: [0, 0, 1.3] }}
                  shadows
                >
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
          <div className="secondQuestionButtonsContainer">{renderButtons(1)}</div>
        </section>

        {/* Tercera sección */}
        <section className="thirdQuestionSection" ref={ref3}>
          <h1 className="titleThirdQuestion">
            Seleccione el botón al que le corresponda un pulmón con Enfermedad
            crónica pulmonar
          </h1>
          <div className="thirdQuestionCanvasContainer">
            {inView3 && (
              <>
                <Canvas
                  className="thirdQuestionCancerCanvas"
                  camera={{ position: [0, 0, 1.3] }}
                  shadows
                >
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
          <div className="thirdQuestionButtonsContainer">{renderButtons(2)}</div>
        </section>

        {/* Cuarta sección */}
        <section className="fourthQuestionSection" ref={ref4}>
          <h1 className="titleFourthQuestion">
            Seleccione el botón al que le corresponda un pulmón con Tuberculosis
          </h1>
          <div className="fourthQuestionCanvasContainer">
            {inView4 && (
              <>
                <Canvas
                  className="fourthQuestionCancerCanvas"
                  camera={{ position: [0, 0, 1.3] }}
                  shadows
                >
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
          <div className="fourthQuestionButtonsContainer">{renderButtons(3)}</div>
        </section>

        {/* Quinta sección */}
        <section className="fifthQuestionSection" ref={ref5}>
          <h1 className="titleFifthQuestion">
            ¿A qué sección corresponde la animación del siguiente personaje?
          </h1>
          <div className="fifthQuestionCanvasContainer">
            {inView5 && (
              <Canvas
                className="fifthQuestionDoctorCanvas"
                camera={{ position: [0, -1, 2] }}
                shadows
              >
                <OrbitControls target={[0, 0, 0]} />
                <Doctor scale={0.015} />
                <Floor />
                <SkyStaging />
                <Lights />
              </Canvas>
            )}
          </div>
          <div className="fifthQuestionButtonsContainer">
            {renderButtons(4)}
          </div>
        </section>

        {/* Sexta sección */}
        <section className="sixthQuestionSection" ref={ref6}>
          <h1 className="titleSixthQuestion">
            ¿A qué sección corresponde el siguiente personaje?
          </h1>
          <div className="sixthQuestionCanvasContainer">
            {inView6 && (
              <Canvas
                className="sixthQuestionManCanvas"
                camera={{ position: [0, 2, 4] }}
                shadows
              >
                <OrbitControls target={[0, 0, 0]} />
                <PersonCoughing scale={2} position={[0, -1, -1]} />
                <Floor />
                <SkyStaging />
                <Lights />
              </Canvas>
            )}
          </div>
          <div className="sixthQuestionButtonsContainer">
            {renderButtons(5)}
          </div>
        </section>

        {/* Séptima sección */}
        <section className="seventhQuestionSection" ref={ref7}>
          <h1 className="titleSeventhQuestion">
            ¿A cual enfermedad hace referencia este tratamiento?
          </h1>
          <div className="seventhQuestionCanvasContainer">
            {inView7 && (
              <Canvas
                className="seventhQuestionSickManCanvas"
                camera={{ position: [0, 2, 4] }}
                shadows
              >
                <OrbitControls target={[0, 0, 0]} />
                <OxygenTheraphy scale={4} />
                <Floor />
                <SkyStaging />
                <Lights />
              </Canvas>
            )}
          </div>
          <div className="seventhQuestionButtonsContainer">
            {renderButtons(6)}
          </div>
        </section>

        {/* octava sección */}
        <section className="eighthQuestionSection" ref={ref8}>
          <h1 className="titleEighthQuestion">
            ¿A qué sección corresponde el siguiente personaje?
          </h1>
          <div className="eighthQuestionCanvasContainer">
            {inView8 && (
              <Canvas
                className="eighthQuestionNurseCanvas"
                camera={{ position: [0, 4, 8] }}
                shadows
              >
                <OrbitControls target={[0, 0, 0]} />
                <Chair scale={4} position={[0, -1.5, -0.5]} />
                <Nurse scale={3} position={[0, -0.9, -2.5]} />
                <Floor />
                <SkyStaging />
                <Lights />
              </Canvas>
            )}
          </div>
          <div className="eighthQuestionButtonsContainer">
            {renderButtons(7)}
          </div>
        </section>

        {Object.keys(selectedAnswers).length === allQuestions.length && (
          <section className="finalQuizSection">
            <h2>¡Has finalizado el quiz!</h2>
            <p>
              Puedes revisar tus respuestas, las verdes son correctas y las rojas incorrectas. <br />
              Intentalo de nuevo si quieres mejorar tu puntuación o Revisa la tabla de posiciones.
            </p>
            <p>
              Respuestas correctas: {totalCorrect} <br />
              Respuestas incorrectas: {totalIncorrect}
            </p>
            <p>Porcentaje: {percentage}%</p>
            <p>Calificación: <strong>{grade}</strong></p> 

            <button className="restartQuizButton" onClick={handleRestart}>
              Realizar de nuevo
            </button>
            <a />
            <button
              className="restartQuizButton"
              onClick={() => navigate("/quiz/medal-table")}
            >
              Ver Medallero 🏆
            </button>
          </section>
        )}
        <div className="quiz-progress">
          Progreso: {Object.keys(selectedAnswers).length} / {allQuestions.length}
        </div>
      </div>
    );
  };

  export default QuizPage;