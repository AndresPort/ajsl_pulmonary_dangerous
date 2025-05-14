import { Sparkles } from "@react-three/drei";

const SparklesStaging = () => {
  return (
    <>
        <Sparkles
        count={100}
        speed={1}
        opacity={1}
        color="yellow"
        size={3}
        scale={[11,7,1]}
        noise={1}
        />
    </>
  );
};

export default SparklesStaging;
