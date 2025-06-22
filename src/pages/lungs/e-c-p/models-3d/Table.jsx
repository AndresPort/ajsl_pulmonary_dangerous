import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Table = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/e-c-p/Table.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.222, 0]} scale={0.059}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_legs001.geometry}
          material={materials['Table black']}
          position={[0, -3.714, 0]}
          rotation={[0, Math.PI / 3, 0]}
          scale={0.074}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_main.geometry}
          material={materials['Table black']}
          position={[0, -3.69, 0]}
          scale={2.754}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_top_ring.geometry}
          material={materials['Table black']}
          position={[0, 5.766, 0]}
          scale={[4.498, 5.507, 4.498]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_top001.geometry}
          material={materials['Table top']}
          position={[0, 5.766, 0]}
          scale={[4.498, 5.507, 4.498]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Table.glb')



export default Table;