import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Componente de luces para el podio 3D
const Lights = () => {
  return (
    <group>
      {/* Luz ambiental para brillo base */}
      <ambientLight intensity={4} color="#ffffff" />

      {/* Luz hemisférica para una iluminación base suave y natural */}
      <hemisphereLight 
        skyColor="#b1e1ff" // Un azul cielo suave
        groundColor="#000000" // Un suelo oscuro
        intensity={1.0} 
      />
      
      {/* Luz direccional principal para sombras nítidas */}
      <directionalLight 
        position={[5, 10, 7.5]} 
        intensity={2.5} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color="#ffffff"
      />
      
      {/* Luz clave para el frente */}
      <spotLight 
        position={[-10, 10, 5]} 
        intensity={1.8} 
        angle={0.2} 
        penumbra={0.8} 
        color="#ffffff"
      />
      
      {/* Luz de relleno para suavizar sombras */}
      <spotLight 
        position={[10, 5, -5]} 
        intensity={1.0} 
        angle={0.3} 
        penumbra={1} 
        color="#ffffff"
      />
      
      {/* Luz de borde para separar del fondo */}
      <pointLight 
        position={[0, 5, -10]} 
        intensity={2.0} 
        color="#ffffff"
      />

      {/* Luces específicas para resaltar cada podio */}
      <pointLight 
        position={[2.5, 3, 2]} 
        intensity={2.0} 
        color="#ffd700"
        distance={8}
        decay={2}
      />
      <pointLight 
        position={[0, 2.5, 2]} 
        intensity={1.8} 
        color="#e5e4e2"
        distance={7}
        decay={2}
      />
      <pointLight 
        position={[-2.5, 2, 2]} 
        intensity={1.5} 
        color="#cd7f32"
        distance={7}
        decay={2}
      />

      {/* Luz azul de acento del color del proyecto */}
      <pointLight 
        position={[-5, 2, -5]} 
        intensity={2.0} 
        color="#1f88e5"
        distance={15}
        decay={1.5}
      />
    </group>
  );
};

export default Lights; 