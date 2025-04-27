import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const Floor = () => {
  const PATH = useMemo(() => "/textures/floor/Onyx015_1K-PNG_", []);

  const floorTexture = useTexture({
    map: `${PATH}Color.png`,
    normalMap: `${PATH}NormalGL.png`,
    roughnessMap: `${PATH}Roughness.png`,
    //displacementMap: `${PATH}Displacement.png`,
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.8} receiveShadow={true}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial {...floorTexture} />
    </mesh>
  );
};

export default Floor;