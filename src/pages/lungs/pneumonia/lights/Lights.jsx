import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);


    return(
        <>
        <ambientLight color={"white"} intensity={1} />
        <directionalLight
        // ref={directionalLightRef}
        color={"white"}
        position={[0, 5, 5]}
        intensity={2}
        castShadow={true}/>
        <spotLight
        color={"#FFD700"}
        position={[2, 10, 2]}
        intensity={1.5}
        angle={Math.PI / 6}
        penumbra={0.5}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}/>
        </>
    )
}

export default Lights;