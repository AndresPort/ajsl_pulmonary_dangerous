import { Html } from "@react-three/drei";
import { useState } from "react";
import "./Titulo.css";

const Titulo = ({ Titulo }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Html
            center
            position={[-0.2, 5, 0]}
            transform
            distanceFactor={5}
            wrapperClass="Titulo"
        >
            <div
                className="titulo-container"
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                <h1>{Titulo}</h1>
                {hovered && <div className="tooltip">Consulta a tu médico</div>}
            </div>
        </Html>
    );
};

export default Titulo;
