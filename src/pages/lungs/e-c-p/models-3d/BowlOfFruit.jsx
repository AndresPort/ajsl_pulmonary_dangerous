import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useSmoker3Store from '../../../../stores/e-c-p-stores/use-smoker3-store'

const BowlOfFruit = (props) => {
  const group = useRef()
  const audioRef = useRef(null)
  const { nodes, materials, animations } = useGLTF('/models-3d/e-c-p/BowlOfFruit.glb')
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useSmoker3Store((state) => state.currentAnimation);
  const setCurrentAnimation = useSmoker3Store((state) => state.setCurrentAnimation);
  useEffect(() => {
    audioRef.current = new Audio('/sounds/Celebration.mp3')
    audioRef.current.volume = 0.7
  }, [])
  useEffect(() => {
    if (actions && currentAnimation && group.current) {
      Object.values(actions).forEach((action) => action.stop());
      if (actions[currentAnimation]) {
        actions[currentAnimation].reset().play();
      }
    }
  }, [actions, currentAnimation]);
  const handleClick = () => {
    setCurrentAnimation('Approbation')
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }
  return (
    <group {...props} dispose={null}>
      <group name="bowl" ref={group}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={materials.Material_0}
          scale={5.449}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.001']}
          onClick={handleClick}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/BowlOfFruit.glb')

export default BowlOfFruit;