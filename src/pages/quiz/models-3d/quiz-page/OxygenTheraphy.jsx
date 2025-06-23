import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function OxygenTheraphy(props) {
  const { nodes, materials } = useGLTF('/models-3d/tuberculosis/OxygenTheraphy.glb')
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const scaleFactor = 1 + Math.sin(t * 1.5) * 0.015 
    if (meshRef.current) {
      meshRef.current.scale.set(1, scaleFactor, 1)
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.OxygenTheraphy.geometry}
        material={materials.OxygenTheraphyMaterial}
      />
    </group>
  )
}

export default OxygenTheraphy;
useGLTF.preload('/models-3d/tuberculosis/OxygenTheraphy.glb')
