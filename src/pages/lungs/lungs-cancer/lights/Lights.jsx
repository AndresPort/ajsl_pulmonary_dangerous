import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();

  return (
    <>
      <ambientLight color={"#F5F5DC"} intensity={1.5} />
      <directionalLight
        ref={directionalLightRef}
        color={"white"}
        position={[0, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};
export default Lights;
