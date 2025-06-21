import { Cylinder, Box, Text, Torus } from "@react-three/drei";

// Componente de medalla rediseñado
const Medal = ({ position, type, player }) => {
  const colors = {
    gold: "#FFD700",
    silver: "#C0C0C0", 
    bronze: "#CD7F32"
  };
  
  const metalness = {
    gold: 0.9,
    silver: 0.95,
    bronze: 0.9
  };
  
  const roughness = {
    gold: 0.2,
    silver: 0.15,
    bronze: 0.25
  };

  const initial = player?.user?.name?.charAt(0).toUpperCase() || 
                  player?.user?.email?.charAt(0).toUpperCase();

  const medalRadius = 0.35;
  const medalThickness = 0.05;

  return (
    <group position={position}>
      {/* Medalla principal (cuerpo) */}
      <Cylinder 
        args={[medalRadius, medalRadius, medalThickness, 64]} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial 
          color={colors[type]}
          metalness={metalness[type]}
          roughness={roughness[type]}
          envMapIntensity={1.5}
        />
      </Cylinder>
      
      {/* Enganche para la cinta */}
      <Torus args={[0.04, 0.015, 16, 32]} position={[0, medalRadius, 0]}>
        <meshStandardMaterial 
          color={colors[type]}
          metalness={metalness[type]}
          roughness={roughness[type]}
          envMapIntensity={1.5}
        />
      </Torus>
      
      {/* Cinta */}
      <mesh position={[0, medalRadius + 0.05, 0]}>
          <boxGeometry args={[0.04, 0.15, 0.1]} />
          <meshStandardMaterial 
              color={type === "gold" ? "#800000" : type === "silver" ? "#4C516D" : "#6F4E37"}
              roughness={0.9}
          />
      </mesh>

      {/* Icono del usuario (inicial) */}
      {initial ? (
        <Text 
          position={[0, 0, medalThickness / 2 + 0.01]} // Posición sobre la cara de la medalla
          fontSize={0.25} 
          color="#000000"
          font="/fonts/Roboto-Regular.ttf"
          anchorX="center"
          anchorY="middle"
        >
          {initial}
        </Text>
      ) : (
        // Fallback al emoji si no hay datos de jugador
        <Text
          position={[0, 0, medalThickness / 2 + 0.01]}
          fontSize={0.25}
        >
          {type === "gold" ? "🥇" : type === "silver" ? "🥈" : "🥉"}
        </Text>
      )}
    </group>
  );
};

export default Medal; 