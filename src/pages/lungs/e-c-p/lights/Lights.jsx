import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);


    return(
        <>
        <ambientLight color={"#F5F5DC"} intensity={2} />
        <directionalLight
        ref={directionalLightRef}
        color={"white"}
        position={[0, 5, 5]}
        intensity={2}
        castShadow={true}/>
        </>
    )
}

export default Lights;