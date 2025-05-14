import { Html } from "@react-three/drei";
import "./PopupTittle.css";

const PopupTittle = ({tittlePart1,tittlePart2,tittlePart3,tittlePart4}) => {
  return (
    <Html
      center
      position={[-2.5, 1.5, -1]}
      transform
      distanceFactor={10}
      wrapperClass="tittle"
      className="htmlPupup"
    >
      <h1 className="tittlePart1">{tittlePart1}</h1><h1 className="tittlePart2">{tittlePart2}</h1><h1 className="tittlePart3">{tittlePart3}</h1><h1 className="tittlePart4">{tittlePart4}</h1>
    </Html>
  );
};

export default PopupTittle;
