import { PositionalAudio } from "@react-three/drei";
import { useEffect, useRef } from "react";

const DoctorSound = ({ active }) => {
  const soundRef = useRef();

  useEffect(() => {
    if (active && soundRef.current && !soundRef.current.isPlaying) {
      soundRef.current.play();
    } else if (!active && soundRef.current && soundRef.current.isPlaying) {
      soundRef.current.stop();
    }
  }, [active]);

  return (
    <PositionalAudio
      ref={soundRef}
      url="/lung-cancer-sounds/esfuerzo.mp3"
      distance={5}
      loop
    />
  );
};

export default DoctorSound;
