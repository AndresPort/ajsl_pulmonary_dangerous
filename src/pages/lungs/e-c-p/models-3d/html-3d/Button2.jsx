import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./Button2.css";
import useNurseStore from '/src/stores/e-c-p-stores/use-nurse-store';

const Button2 = ({ onReset }) => {
    const { setCurrentAnimation } = useNurseStore();
    const [showText, setShowText] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.code;

            if (key === "KeyR") {
                setCurrentAnimation("SittingIdle");
                
                setShowText(true);
            }

            if (["KeyA", "KeyW", "KeyS", "KeyD"].includes(key)) {
                setShowText(false);
                if (onReset) onReset();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [onReset, setCurrentAnimation]);

    const handleClick = () => {
        setCurrentAnimation("SittingThumbsUp");
        setShowText(true);
        setShowPopup(true);
        if (onReset) onReset();
    };

    return (
        <>
            <Html className="buttons-container1" center position={[0, -4.5, 0]}>
                {showText && (
                    <p className="text-reset1 blinking">
                        Muevete con "w a s d" y recorre la habitacion
                    </p>
                )}
                <button className="help-button" title="Clickea la cabeza del fumador para una sorpresa" onClick={handleClick}>
                    {"Pedir ayuda"}
                </button>
            </Html>

            {showPopup && (
                <Html className="popup-container" center position={[-4.5, -5, 0]}>
                    <div className="popup">
                        <p>Recuerda que puedes hablar con el personal médico si tienes dudas.</p>
                        <button onClick={() => setShowPopup(false)}>Cerrar</button>
                    </div>
                </Html>
            )}
        </>
    );
};

export default Button2;


