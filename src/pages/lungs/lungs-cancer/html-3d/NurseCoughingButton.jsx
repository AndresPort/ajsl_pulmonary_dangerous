import  { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";

const NurseCoughingButton = (props) => {
  const audioRef = useRef(null);

  const reproducir = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/lung-cancer-sounds/CoughSound.mp3");
      audioRef.current.loop = true; // poner en loop
    }
    audioRef.current.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "p" && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // reiniciar audio
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup al desmontar
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <Html className="buttonContainer" center position={[0, -5, 0]}>
    <button className={props.className} onClick={reproducir}>
      Sintoma
    </button>
    </Html>
  );
};

export default NurseCoughingButton;
