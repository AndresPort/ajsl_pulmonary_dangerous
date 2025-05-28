import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // Import useFrame
import { useRef } from "react"; // Import useRef
import { useState } from "react"; // Import useState

const LungsModel = (props) => {
    const { nodes, materials } = useGLTF("models-3d/pneumonia/LungsModel.glb");
    const groupRef = useRef(); // Reference for the group
    const [scaleFactor, setScaleFactor] = useState(1); // State for breathing animation

    useFrame(({ clock }) => {
        const breathingScale = 2 + 0.1 * Math.sin(clock.getElapsedTime() * 1.2); // Breathing effect
        setScaleFactor(breathingScale);
        if (groupRef.current) {
            groupRef.current.scale.set(breathingScale, breathingScale, breathingScale);
        }
    });
    
    return(
        <group {...props} dispose={null} ref={groupRef}>
            <Float floatIntensity={0} speed={4} rotationIntensity={0} rotation={[0, 3.4, 0]}>
                <mesh geometry={nodes.LungsModel.geometry} material={materials.LungsModelMaterial} castShadow>
                </mesh>
            </Float>
        </group>
    );
}

export default LungsModel;

useGLTF.preload("models-3d/pneumonia/LungsModel.glb");