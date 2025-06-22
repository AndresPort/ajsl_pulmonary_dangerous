import { Html, Text } from "@react-three/drei";
import { useState } from "react";
import "./Titulo.css";

const Titulo = ({ Titulo }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <Text
                center
                position={[0, 7, -6]}
                fontSize={0.8}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                {Titulo}
            </Text>

            {hovered && (
                <Html position={[0, 6, -6]}>
                    <div className="tooltip">Consulta a tu medico</div>
                </Html>
            )}
        </>
    );
};

export default Titulo;
