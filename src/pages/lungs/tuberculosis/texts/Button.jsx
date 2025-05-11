import { Html } from "@react-three/drei";
import useManStore from "/src/stores/tuberculosis-stores/use-man-store";
import "./Button.css"; 

const Button = () => {
  const { setCurrentAnimation } = useManStore();

  return (
    <Html className="buttons-container"center position={[0, -5, 0]}>
        <button className="coughing-button" onClick={() => setCurrentAnimation("Coughing")}>
            {"Toser"}
        </button>
        <p>ㅤ</p>
        <button className="sweat-button" onClick={() => setCurrentAnimation("Sweat")}>
            {"Sudar"}
        </button>
    </Html>
  );
};

export default Button;
