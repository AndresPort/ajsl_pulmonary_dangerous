import { Text3D, Center, Html } from "@react-three/drei";
import "./Title.css";
import { useState } from "react";

const TextPrevention = ({ Encabezado }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
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
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          {Encabezado}
          <meshNormalMaterial />
        </Text3D>
        {hovered && (
                <Html position={[4.3, 5.5, -6.2]}>
                    <div className="tooltip">Lavate las manos y cubrete al toser o estornudar</div>
                </Html>
            )}
      </Center>
  );
};


export default TextPrevention;