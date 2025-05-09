import { Html } from "@react-three/drei";
import usePersonStore from "/src/stores/pneumonia-stores/use-person-store";
import "./html-3d.css"; 

const Button = () => {
  const { setCurrentAnimation } = usePersonStore();

  return (
    <Html className="buttons-container"center position={[0, -5, 0]}>
        <button className="symptoms-button" onClick={() => setCurrentAnimation("MiddleCough")}>
            {"Sintomas"}
        </button>
        <button className="reset-button" onClick={() => setCurrentAnimation("Idle")}>
            {"Reiniciar"}
        </button>
    </Html>
  );
};

export default Button;