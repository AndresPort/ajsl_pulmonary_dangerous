import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const CityLights = () => {
    const lightRef = useRef();
    let angle = 0;

    useFrame(() => {
        if (lightRef.current) {
            angle += 0.001;
            const x = 10 * Math.cos(angle);
            const z = 10 * Math.sin(angle);
            lightRef.current.position.set(x, 5, z);
            lightRef.current.target.position.set(0, 0, 0);
            lightRef.current.target.updateMatrixWorld();
        }
    });

    return (
        <>
            <directionalLight
                ref={lightRef}
                color={"#F5F5DC"}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <ambientLight color={"#F5F5DC"} intensity={.5} />
        </>

    );
};



export default CityLights;
