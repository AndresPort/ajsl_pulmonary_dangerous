import { Html } from "@react-three/drei";
import "./PreventionText.css";

const PreventionText = ({text}) => {
  return (
    <Html
      center
      position={[0.6, -0.6, -1]}
      transform
      distanceFactor={5}
      wrapperClass="text"
      className="htmlPupup"
    >
      <h3 className="text">{text}</h3>
    </Html>
  );
};

export default PreventionText;
