import { Html } from "@react-three/drei";
import useSmokerStore from "/src/stores/e-c-p-stores/use-smoker-store";
import "./Button.css"; 

const Button = () => {
  const { setCurrentAnimation } = useSmokerStore();

  return (
    <Html className="buttons-container"center position={[0, -5, 0]}>
        <button className="symptoms-button" onClick={() => setCurrentAnimation("Coughing")}>
            {"Sintomas"}
        </button>
        <button className="reset-button" onClick={() => setCurrentAnimation("Smoking")}>
            {"Causas"}
        </button>
    </Html>
  );
};

export default Button;