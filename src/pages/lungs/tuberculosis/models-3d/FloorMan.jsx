import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const FloorMan = () => {
  const PATH = useMemo(() => "/textures/floor/laminate-flooring-brown_", []);

  const floorTexture = useTexture({
    map: `${PATH}albedo.png`,
    normalMap: `${PATH}normal-ogl.png`,
    //displacementMap: `${PATH}height.png`,
    aoMap: `${PATH}ao.png`,
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-2.3} receiveShadow={true}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial {...floorTexture} />
    </mesh>
  );
};

export default FloorMan