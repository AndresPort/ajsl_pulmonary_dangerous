import { Text, Html } from "@react-three/drei";
import { useState } from "react";
import "./Title.css";

const Title = ({ title }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <Text
                center
                position={[0, 4, -6]}
                fontSize={0.8}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                {title}
            </Text>

            {hovered && (
                <Html position={[0, -6.2, -6]}>
                    <div className="tooltip">Presione la tecla L para cambiar la iluminación</div>
                </Html>
            )}
        </>
    );
};

export default Title;
