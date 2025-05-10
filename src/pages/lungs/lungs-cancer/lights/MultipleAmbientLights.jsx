
import { useRef } from "react";

const MultipleAmbientLights = () => {
  const directionalLightRef = useRef();

  const spotLightRef = useRef();

  return (
    <>
      <spotLight
        ref={spotLightRef}
        color={"red"}
        position={[0, 2, 0]}
        distance={3.5}
        intensity={100}
        angle={Math.PI / 2}
        penumbra={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={10}
        shadow-bias={-0.0001}
        target-position={[0, 0, 0]}
      />

      <ambientLight color={"#F5F5DC"} intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        color={"yellow"}
        position={[0, 5, 5]}
        intensity={2}
        castShadow={true}
      />
    </>
  );
};

export default MultipleAmbientLights;
