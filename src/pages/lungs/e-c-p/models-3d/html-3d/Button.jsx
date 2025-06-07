import { Html } from "@react-three/drei";
import useSmokerStore from "/src/stores/e-c-p-stores/use-smoker-store";
import { useEffect, useState } from "react";
import "./Button.css";

const Button = (onSymptomsClick, onReset) => {
    const { setCurrentAnimation } = useSmokerStore();
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "KeyQ") {
                setCurrentAnimation("Idle");
                setShowText(false);
                onReset();
            }
            if (event.code === "Escape") {
                setCurrentAnimation("Idle");
                setShowText(false);
                onReset();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [setCurrentAnimation, onReset]);

    return (
        <Html className="buttons-container" center position={[0, -5, 0]}>
            <button
                className="symptoms-button" onClick={() => { setCurrentAnimation("Coughing"); setShowText(true); onSymptomsClick(); }}>
                {"Sintomas"}
            </button>
            <button className="cause-button" onClick={() => { setCurrentAnimation("Smoking"); setShowText(true); onSymptomsClick(); }}>
                {"Causas"}
            </button>
            {showText && (
                <p className="text-reset blinking">Presiona " q " o " esc " para reiniciar la animacion</p>
            )}
        </Html>
    );
};

export default Button;