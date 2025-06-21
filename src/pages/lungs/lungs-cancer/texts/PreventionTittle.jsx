import { Text3D } from "@react-three/drei";

const PreventionTittle = ({ textTittle}) => {
  return (
    <Text3D
      font={"fonts/Alice.json"}
      center
      position={[-2, 1.3, -1]}
      className="preventionTtitle"
      size={0.45}
      height={0.02}
    >
      {textTittle}
      
    </Text3D>
  );
};

export default PreventionTittle;
