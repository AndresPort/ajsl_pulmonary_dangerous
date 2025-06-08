import { Text3D, Center, Float } from "@react-three/drei";
import "./Title.css";

const Encabezado = ({ Encabezado }) => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={[0, 3, 0]}>
        <Text3D
          font="fonts/Alice.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.02}
          size={0.7}
        >
          {Encabezado}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Float>
  );
};


export default Encabezado;