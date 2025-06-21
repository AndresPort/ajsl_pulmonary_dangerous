import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import useManStore from '/src/stores/pneumonia-stores/use-man-store';
import vacunacionData from '../data/data.json';

const VaccineNeedle = ({ onClick }) => {
  const { nodes, materials } = useGLTF('models-3d/pneumonia/vaccine_needle.glb')
  const needlePosition = useManStore(state => state.needlePosition);
  const needleVisible = useManStore(state => state.needleVisible);
  const currentAnimation = useManStore(state => state.currentAnimation);
  const [hovered, setHovered] = useState(false);
  const [showText, setShowText] = useState(false);
  
  // Estados para efectos de hover del texto
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [bgOpacity, setBgOpacity] = useState(0.7);
  const [textScale, setTextScale] = useState(1);

  // Cerrar el texto cuando se inicie la animación
  useEffect(() => {
    if (currentAnimation === "Running") {
      setShowText(false);
    }
  }, [currentAnimation]);

  const handleNeedleClick = () => {
    setShowText(true);
  };

  const handleTextPointerEnter = (e) => {
    setBackgroundColor("#1f88e5");
    setBgOpacity(0.9);
    setTextScale(1.05);
    document.body.style.cursor = "pointer";
  };

  const handleTextPointerLeave = (e) => {
    setBackgroundColor("black");
    setBgOpacity(0.7);
    setTextScale(1);
    document.body.style.cursor = "default";
  };

  const handleNeedlePointerEnter = () => {
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handleNeedlePointerLeave = () => {
    setHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <group dispose={null}>
      {needleVisible && (
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          castShadow
          receiveShadow
          position={needlePosition}
          scale={hovered ? 0.55 : 0.5}
          rotation={[0, 0, Math.PI / 2]}
          onPointerEnter={handleNeedlePointerEnter}
          onPointerLeave={handleNeedlePointerLeave}
          onClick={handleNeedleClick}
        />
      )}
      
      {showText && (
        <>
          {/* Fondo interactivo para el texto */}
          <mesh 
            position={[0, -0.5, -1.6]} 
            onPointerEnter={handleTextPointerEnter}
            onPointerLeave={handleTextPointerLeave}
            onClick={onClick}
          >
            <planeGeometry args={[5, 3]} />
            <meshBasicMaterial color={backgroundColor} transparent opacity={bgOpacity} />
          </mesh>
          
          {/* Título */}
          <Text
            position={[0, 0.3, -1.5]}
            fontSize={0.3}
            color="white"
            font="/fonts/Roboto-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
            onPointerEnter={handleTextPointerEnter}
            onPointerLeave={handleTextPointerLeave}
            onClick={onClick}
            scale={[textScale, textScale, textScale]}
          >
            Vacunación
          </Text>
          
          {/* Contenido del texto */}
          <Text
            position={[0, -1, -1.5]}
            fontSize={0.2}
            color="white"
            font="/fonts/Roboto-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            textAlign="center"
            maxWidth={4}
            lineHeight={1.4}
            onPointerEnter={handleTextPointerEnter}
            onPointerLeave={handleTextPointerLeave}
            onClick={onClick}
            scale={[textScale, textScale, textScale]}
          >
            {vacunacionData.vacunacion}
          </Text>
          
          {/* Botón de cerrar */}
          <Text
            position={[2.2, 0.8, -1.4]}
            fontSize={0.4}
            color="white"
            font="/fonts/Roboto-Regular.ttf"
            anchorX="center"
            anchorY="middle"
            onClick={(e) => {
              e.stopPropagation();
              setShowText(false);
            }}
            onPointerEnter={() => document.body.style.cursor = 'pointer'}
            onPointerLeave={() => document.body.style.cursor = ''}
          >
            ✕
          </Text>
        </>
      )}
    </group>
  )
}

export default VaccineNeedle;

useGLTF.preload('models-3d/pneumonia/vaccine_needle.glb')