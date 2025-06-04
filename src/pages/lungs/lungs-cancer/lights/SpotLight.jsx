import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const SpotLight = () => {
  const spotLightRef = useRef();
  const targetRef = useRef();
  const directionalLightRef = useRef();

  useEffect(() => {
    if (spotLightRef.current && targetRef.current) {
      spotLightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      <spotLight
        ref={spotLightRef}
        color={"lightblue"}
        position={[0, 1.2, 0.7]}
        distance={3.8}
        intensity={8}
        angle={Math.PI / 2}
        penumbra={1}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={10}
        shadow-bias={-0.0001}
      />
      <object3D ref={targetRef} position={[0, 0, 0]} />

      <directionalLight
        ref={directionalLightRef}
        color={"white"}
        position={[1, 1, 2]}
        intensity={0.3}
        castShadow={true}
      />
    </>
  );
};

export default SpotLight;
