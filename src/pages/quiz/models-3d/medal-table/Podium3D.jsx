import { Box, Text } from "@react-three/drei";
import Medal from "./Medal";
import Lights from "./Lights";
import Effects from "./Effects";

// Componente del podio 3D mejorado
const Podium3D = ({ top3Players = [] }) => {
  const goldPlayer = top3Players[0];
  const silverPlayer = top3Players[1];
  const bronzePlayer = top3Players[2];

  // La base tiene su centro en y=0 y una altura de 0.5. Su superficie superior está en y=0.25.
  const baseTopY = 0.25;

  return (
    <group>
      {/* Base del podio con material metálico */}
      <Box args={[8, 0.5, 4]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.8} 
          roughness={0.2}
          envMapIntensity={1}
        />
      </Box>
      
      {/* Tercer lugar - Bronce (altura 1). Pos y = 0.25 + 1/2 = 0.75 */}
      <Box args={[2, 1, 2]} position={[-2.5, baseTopY + 0.5, 0]}>
        <meshStandardMaterial 
          color="#cd7f32" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.2}
        />
      </Box>
      
      {/* Segundo lugar - Plata (altura 1.5). Pos y = 0.25 + 1.5/2 = 1.0 */}
      <Box args={[2, 1.5, 2]} position={[0, baseTopY + 0.75, 0]}>
        <meshStandardMaterial 
          color="#e5e4e2" 
          metalness={0.95} 
          roughness={0.05}
          envMapIntensity={1.5}
        />
      </Box>
      
      {/* Primer lugar - Oro (altura 2). Pos y = 0.25 + 2/2 = 1.25 */}
      <Box args={[2, 2, 2]} position={[2.5, baseTopY + 1.0, 0]}>
        <meshStandardMaterial 
          color="#ffd700" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1.3}
        />
      </Box>
      
      {/* Medallas mejoradas, posicionadas correctamente sobre los podios */}
      <Medal position={[-2.5, 1.8, 0]} type="bronze" player={bronzePlayer} />
      <Medal position={[0, 2.3, 0]} type="silver" player={silverPlayer} />
      <Medal position={[2.5, 2.8, 0]} type="gold" player={goldPlayer} />
      
      {/* Textos de posiciones con mejor estilo */}
      <Text 
        position={[-2.5, 0.5, 1.2]} 
        fontSize={0.4} 
        color="#cd7f32"
        font="/fonts/Roboto-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        3°
      </Text>
      <Text 
        position={[0, 1, 1.2]} 
        fontSize={0.4} 
        color="#c0c0c0"
        font="/fonts/Roboto-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        2°
      </Text>
      <Text 
        position={[2.5, 1.25, 1.2]} 
        fontSize={0.4} 
        color="#ffd700"
        font="/fonts/Roboto-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        1°
      </Text>
      
      {/* Efectos visuales (partículas) */}
      <Effects />
      
      {/* Sistema de iluminación mejorado */}
      <Lights />
    </group>
  );
};

export default Podium3D; 