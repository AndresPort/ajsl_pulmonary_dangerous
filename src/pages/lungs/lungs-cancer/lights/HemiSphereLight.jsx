import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";

const HemisphereLight = () => {
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
        color={"white"}
        position={[0, 3, 2.5]}
        distance={20}
        intensity={20}
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
        intensity={0.2}
        castShadow={true}
      />
    </>
  );
};

export default HemisphereLight;
