import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Prevention(props) {
  const { nodes, materials } = useGLTF('/models-3d/tuberculosis/PreventionTuberculosis.glb')
    const groupRef = useRef()

    useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05 // efecto de flotación
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null} position={[-0.8, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Syringe.geometry}
        material={materials.Material_syringe}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FaceMask.geometry}
        material={materials.Materias_faceMask}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/tuberculosis/PreventionTuberculosis.glb')