import { Html } from "@react-three/drei";
import "./Tittle.css";

const Tittle = ({ tittle }) => {
  return (
    <Html
      center
      position={[0, -0.2, 0]}
      transform
      distanceFactor={10}
      wrapperClass="tittle"
    >
      <h1>{tittle}</h1>
    </Html>
  );
};

export default Tittle;
