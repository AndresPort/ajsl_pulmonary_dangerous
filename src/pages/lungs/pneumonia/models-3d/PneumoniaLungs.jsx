import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // Import useFrame
import { useRef } from "react"; // Import useRef
import { useState } from "react"; // Import useState

const PneumoniaLungs = (props) => {
    const { nodes, materials } = useGLTF("models-3d/pneumonia/pneumonia-lungs.glb");
    const groupRef = useRef(); // Reference for the group
    const [scaleFactor, setScaleFactor] = useState(1); // State for breathing animation

    useFrame(({ clock }) => {
        const breathingScale = 2 + 0.1 * Math.sin(clock.getElapsedTime() * 1.2); // Breathing effect
        setScaleFactor(breathingScale);
        if (groupRef.current) {
            groupRef.current.scale.set(breathingScale, breathingScale, breathingScale);
        }
    });

    return (
        <group {...props} dispose={null} ref={groupRef}>
            <Float floatIntensity={0} speed={4} rotationIntensity={0} rotation={[0, Math.PI / 1.7, 0]}>
                <mesh geometry={nodes.PneunoniaLungs.geometry} material={materials.PneumoniaLungsMaterial} castShadow>
                </mesh>
            </Float>
        </group>
    );
};

export default PneumoniaLungs;

useGLTF.preload("models-3d/pneumonia/pneumonia-lungs.glb");