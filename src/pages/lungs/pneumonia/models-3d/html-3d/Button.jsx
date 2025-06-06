import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import usePersonStore from "/src/stores/pneumonia-stores/use-person-store";
import "./html-3d.css";

const Button = ({ onSymptomsClick, onReset }) => {
  const { setCurrentAnimation } = usePersonStore();
  const [showText, setShowText] = useState(false);

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

  return (
    <Html className="buttons-container" center position={[0, -5, 0]} zIndex={0} portal={{ zIndex: 10 }}>
      <button
        className="symptoms-button"
        onClick={() => {
          setCurrentAnimation("MiddleCough");
          setShowText(true); // Show text when "Síntomas" button is pressed
          onSymptomsClick(); // Notify parent component
        }}
      >
        {"Demostración"}
      </button>
      {showText && (
        <p className="text-reset blinking">Presiona " r " para reiniciar</p>
      )}
    </Html>
  );
};

export default Button;