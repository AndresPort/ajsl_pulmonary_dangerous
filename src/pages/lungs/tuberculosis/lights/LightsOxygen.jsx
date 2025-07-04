import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  //DirectionalLightHelper,
  HemisphereLightHelper,
  MathUtils,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const LightsOxygen = () => {
  const directionalLightRef = useRef();
  //useHelper(directionalLightRef, DirectionalLightHelper);

//   useFrame((state) => {
//     const elapsedTime = state.clock.getElapsedTime();
//     directionalLightRef.current.position.x = MathUtils.lerp(
//       -1,
//       1,
//       Math.cos(elapsedTime)
//     );
//   });

  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 2, "cyan");

  const spotLightRef = useRef();
  useHelper(spotLightRef);

  const hemisphereLightRef = useRef();
  useHelper(hemisphereLightRef, HemisphereLightHelper);

  return (
    <>
      {/* <hemisphereLight
        ref={hemisphereLightRef}
        color={"red"}
        groundColor={"blue"}
        intensity={2}
      /> */}
      <spotLight
        ref={spotLightRef}
        color={"white"}
        position={[0, 7, 2]}
        distance={12}
        intensity={120}
        angle={Math.PI / 10}
        penumbra={1}
      /> {/*}
      <pointLight
        ref={pointLightRef}
        color={"cyan"}
        position={[0, 2, -4]}
        intensity={0}
      /> */}
      {/* <ambientLight color={"#F5F5DC"} intensity={2} />
      <directionalLight
        ref={directionalLightRef}
        color={"yellow"}
        position={[0, 5, 5]}
        intensity={2}
        castShadow={true} 
        //shadow-mapSize={[2048, 2048]}
        //shadow-camera-left={-1}
        //shadow-camera-right={1}
        //shadow-camera-top={1}
        //shadow-camera-bottom={-1}
        //shadow-camera-near={1}
        //shadow-camera-far={7.5}
      /> */}
    </>
  );
};

export default LightsOxygen;