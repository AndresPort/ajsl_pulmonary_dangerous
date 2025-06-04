import { Text3D } from "@react-three/drei";
import "./TreatmentTitle.css";

const TreatmentTitle = ({ title }) => {
  return (
    <Text3D 
    font={"fonts/Alice.json"} 
    center
     position={[-1.24, 0.5, 0]}
    className="treatmentTitleText"
    size={0.45}                
    height={0.01}
    >
        {title}
    </Text3D>
  );
};
export default TreatmentTitle;
