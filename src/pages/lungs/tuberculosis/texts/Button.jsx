import { Html } from "@react-three/drei";
import useManStore from "/src/stores/tuberculosis-stores/use-man-store";
import "./Button.css"; 

const Button = () => {
  const { setCurrentAnimation } = useManStore();

  return (
    <Html className="buttons-container"center position={[0, -5, 0]}>
        <button className="coughing-button" title="Con 'R' o 'Espacio' se reinicia la animación" onClick={() => setCurrentAnimation("Coughing")}>
            {"Toser"}
        </button>
        <p>ㅤ</p>
        <button className="sweat-button" title="Con 'R' o 'Espacio' se reinicia la animación" onClick={() => setCurrentAnimation("Sweat")}>
            {"Sudar"}
        </button>
    </Html>
  );
};

export default Button;
