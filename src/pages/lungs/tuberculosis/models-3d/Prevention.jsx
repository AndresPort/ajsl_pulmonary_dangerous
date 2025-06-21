import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/tuberculosis/PreventionTuberculosis.glb')
  return (
    <group {...props} dispose={null}>
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