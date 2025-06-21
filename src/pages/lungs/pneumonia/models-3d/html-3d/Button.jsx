import { Html, PositionalAudio } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import usePersonStore from "/src/stores/pneumonia-stores/use-person-store";
import "./html-3d.css";

const Button = ({ onSymptomsClick, onReset }) => {
  const { setCurrentAnimation } = usePersonStore();
  const [showText, setShowText] = useState(false);
  const [playSymptomAudio, setPlaySymptomAudio] = useState(false);
  const symptomAudioRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "r") {
        setCurrentAnimation("Idle");
        setShowText(false); // Hide text when "r" is pressed
        onReset(); // Notify parent component to reset sparkles
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setCurrentAnimation, onReset]);

  const handleSymptomsClick = () => {
    setCurrentAnimation("MiddleCough");
    setShowText(true); // Show text when "Síntomas" button is pressed
    setPlaySymptomAudio(false); // Reinicia el audio si ya estaba
    setTimeout(() => setPlaySymptomAudio(true), 10); // Activa el audio (delay para reinicio)
    if (onSymptomsClick) onSymptomsClick(); // Notify parent component
  };

  return (
    <>
      <Html className="buttons-container" center position={[0, -5, 0]} zIndex={0} portal={{ zIndex: 10 }}>
        <button
          className="symptoms-button"
          onClick={handleSymptomsClick}
        >
          {"Demostración"}
        </button>
        {showText && (
          <p className="text-reset blinking">Presiona " r " para reiniciar</p>
        )}
      </Html>
      {playSymptomAudio && (
        <PositionalAudio
          ref={symptomAudioRef}
          url={"./sounds/cough.mp3"}
          distance={5}
          loop={false}
          autoplay={true}
          position={[0, -5, 0]}
          onEnded={() => setPlaySymptomAudio(false)}
        />
      )}
    </>
  );
};

export default Button;