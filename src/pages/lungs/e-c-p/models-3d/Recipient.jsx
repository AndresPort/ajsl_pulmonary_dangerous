import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const Recipient = () => {
    const PATH = useMemo(() => "/textures/floor/oak-wood-bare_", []);
    const floorTexture = useTexture({
        map: `${PATH}albedo.png`,
        normalMap: `${PATH}normal-ogl.png`,
        roughnessMap: `${PATH}roughness.png`,
        displacementMap: `${PATH}height.png`,
        aoMap: `${PATH}ao.png`,
        metalnessMap: `${PATH}metallic.png`,
    });
    return (
        <mesh rotation-x={-Math.PI / 2} position-y={-1.425} receiveShadow={true}>
            <circleGeometry args={[10, 32]} />
            <meshStandardMaterial {...floorTexture} />
        </mesh>
    );
};

export default Recipient;