import { Html } from "@react-three/drei";
import "./TreatmentText.css";

const TreatmentText = ({ textPart1, textPart2, textPart3, textPart4 }) => {
  return (
    <Html
      center
      position={[-2.5, 1.5, -1]}
      transform
      distanceFactor={10}
      wrapperClass="text"
      className="htmlPupup"
    >
      <h1 className="textPart1">{textPart1}</h1><h1 className="textPart2">{textPart2}</h1><h1 className="textPart3">{textPart3}</h1><h1 className="textPart4">{textPart4}</h1>
    </Html>
  );
};

export default TreatmentText;
