import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ManCoughing (props) {
  const { nodes, materials } = useGLTF('/models-3d/tuberculosis/ManCoughing.glb')
  const torsoRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const duration = 3
    const progress = (t % duration) / duration

    if (progress < 0.25) {
      const strength = Math.sin(progress * Math.PI * 4)
      torsoRef.current.rotation.x = 0.05 * strength
    } else {
      torsoRef.current.rotation.x *= 0.9
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ManCoughing.geometry}
        material={materials.ManCoughingMaterial}
      />
      <mesh
        ref={torsoRef}
        castShadow
        receiveShadow
        geometry={nodes.Torso.geometry}
        material={materials.ManCoughingMaterial}
        position={[0.017, 0.036, -0.182]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arm.geometry}
          material={materials.ManCoughingMaterial}
          position={[-0.017, -0.036, 0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head.geometry}
          material={materials.ManCoughingMaterial}
          position={[-0.017, -0.036, 0.182]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models-3d/tuberculosis/ManCoughing.glb')
