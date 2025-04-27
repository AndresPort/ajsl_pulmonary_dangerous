import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Lungs(props) {
  const { nodes, materials } = useGLTF('/models-3d/Lungs.glb')
  const lungsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = 20 + Math.sin(time * 2) * 0.2; // Pulmón respirando suave
    if (lungsRef.current) {
      lungsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group {...props} dispose={null} ref={lungsRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lungs.geometry}
        material={materials.LungsMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Lungs.glb')
