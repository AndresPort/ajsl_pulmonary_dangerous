import { Text } from "@react-three/drei";
import './html-3d.css';
import { useState } from "react";

const TreatmentText = ({ text, onClick }) => {
    const [backgroundColor, setBackgoundColor] = useState("black");
    const [bgOpacity, setBgOpacity] = useState(0.7);
    const [textScale, setTextScale] = useState(1);

    const handlePointerEnter = (e) => {
        setBackgoundColor("#1f88e5");
        setBgOpacity(0.9); // Más opaco al hacer hover
        setTextScale(1.05); // Aumenta el tamaño del texto
        document.body.style.cursor = "pointer";
    };

    const handlePointerLeave = (e) => {
        setBackgoundColor("black");
        setBgOpacity(0.7);
        setTextScale(1);
        document.body.style.cursor = "default";
    };

    return (
        <>
        <group>

            <mesh
                position={[-4, 1, -0.01]} // Un poco detrás del texto (z negativo)
                rotation={[0, Math.PI / 12, 0]}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                onClick={onClick}
            >
                <planeGeometry args={[6.6, 5.5]} />
                <meshBasicMaterial color={backgroundColor} transparent opacity={bgOpacity} />
            </mesh>
            <Text
                position={[-4, 1, 0]}
                font={"/fonts/Roboto-Regular.ttf"}
                fontSize={0.5}
                color="white"
                maxWidth={6}
                lineHeight={1.1}
                rotation={[0, Math.PI / 12, 0]}
                onClick={onClick}
                onPointerOver={handlePointerEnter}
                onPointerOut={handlePointerLeave}
                scale={[textScale, textScale, textScale]}
            >
                {text}
            </Text>
        </group>
        
        </>
        
    )
}

export default TreatmentText;