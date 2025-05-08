import { Sparkles } from "@react-three/drei";

const SparklesStaging = () => {
  return (
    <>
        <Sparkles
        count={80}
        speed={1}
        opacity={1}
        color="yellow"
        size={2}
        scale={[12,5,1]}
        noise={1}
        />
    </>
  );
};

export default SparklesStaging;
