import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Chair = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/e-c-p/Chair.glb')
  const group = useRef()
    
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI, 0]}> 
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obod_sidenie__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nogi__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Spinka__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekladina__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fixator__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Obruch__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekladini__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Setka__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, -0.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolti__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

export default Chair;

useGLTF.preload('/chair.glb')
