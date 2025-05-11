import { Sparkles } from "@react-three/drei";

const SparklesEffect = () => {
  return (
    <Sparkles
      size={6}
      scale={[1, 1, 1]}
      position={[-0.3, 5.2, 0.3]}
      speed={0.5}
      count={20}
      color="green"
    />
  );
}
export default SparklesEffect;