import React, { useEffect, useRef } from "react";

const CoughSound = (props) => {
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
    <button className={props.className} onClick={reproducir}>
      Sintoma
    </button>
  );
};

export default CoughSound;
