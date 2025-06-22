import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useSmoker3Store from '../../../../stores/e-c-p-stores/use-smoker3-store'
import useNpc2Store from '../../../../stores/e-c-p-stores/use-npc2-store'

const Cigarretes = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/e-c-p/Cigarretes.glb')
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useSmoker3Store((state) => state.currentAnimation);
  const setCurrentAnimation = useSmoker3Store((state) => state.setCurrentAnimation);
  const setNpc2Animation = useNpc2Store((state) => state.setCurrentAnimation);

  useEffect(() => {
    if (actions && currentAnimation && group.current) {
      Object.values(actions).forEach((action) => action.stop());
      if (actions[currentAnimation]) {
        actions[currentAnimation].reset().play();
      }
    }
  }, [actions, currentAnimation]);
  
  return (
    <group {...props} dispose={null}>
      <group name="cigarrete" ref={group}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box.geometry}
          material={materials.BoxF_Material}
          position={[-2.424, 0.792, 0.085]}
          scale={[0.275, 0.377, 0.342]}
          onClick={() => {
            setCurrentAnimation("Negation")
            setNpc2Animation("Angry")
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CigaretteGroup.geometry}
          material={materials.CigarF_Material}
          position={[-2.646, 0.361, 0.187]}
          scale={[0.367, 0.342, 0.367]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LonerCigarette.geometry}
          material={materials.CigarF_Material}
          position={[-2.646, 0.361, 0.141]}
          scale={[0.367, 0.342, 0.367]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LonerCigarette001.geometry}
          material={materials.CigarF_Material}
          position={[-2.472, 0.361, 0.141]}
          scale={[0.367, 0.342, 0.367]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Cigarretes.glb')

export default Cigarretes;