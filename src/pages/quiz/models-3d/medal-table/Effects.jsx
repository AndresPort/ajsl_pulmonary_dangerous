import { Sparkles } from "@react-three/drei";

const Effects = () => {
  return (
    <Sparkles 
      count={50}
      scale={[8, 5, 4]} // Escala para cubrir el área del podio
      size={1.2}
      speed={0.4}
      color="#ffd700" // Destellos dorados
    />
  );
};

export default Effects; 