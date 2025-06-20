import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import useManStore from '/src/stores/pneumonia-stores/use-man-store';

const VaccineNeedle=(props) => {
  const { nodes, materials } = useGLTF('models-3d/pneumonia/vaccine_needle.glb')
  const needlePosition = useManStore(state => state.needlePosition);
  const needleVisible = useManStore(state => state.needleVisible);
  return (
    <group {...props} dispose={null}>
      {needleVisible && (
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          castShadow
          receiveShadow
          position={needlePosition}
          scale={0.4}
          rotation={[0, 0, Math.PI / 2]}
        />
      )}
    </group>
  )
}

export default VaccineNeedle;
useGLTF.preload('models-3d/pneumonia/vaccine_needle.glb')