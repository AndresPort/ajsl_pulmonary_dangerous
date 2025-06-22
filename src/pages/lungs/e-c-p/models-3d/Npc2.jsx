import React, { useEffect,useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useNpc2Store from '../../../../stores/e-c-p-stores/use-npc2-store'

const Npc2 = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/e-c-p/NPC2.glb')
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useNpc2Store((state) => state.currentAnimation);
    useEffect(() => {
        if (actions && currentAnimation && group.current) {
            Object.values(actions).forEach((action) => action.stop());
            if (actions[currentAnimation]) {
                actions[currentAnimation].reset().play();
            }
        }
    }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.Bodymat}
            skeleton={nodes.Body.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Bottoms"
            geometry={nodes.Bottoms.geometry}
            material={materials.Bottomma}
            skeleton={nodes.Bottoms.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Eyelashes"
            geometry={nodes.Eyelashes.geometry}
            material={materials.Eyelashmat}
            skeleton={nodes.Eyelashes.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.Bodymat}
            skeleton={nodes.Eyes.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.Hairmat}
            skeleton={nodes.Hair.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials['Shoesmat.001']}
            skeleton={nodes.Shoes.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Tops"
            geometry={nodes.Tops.geometry}
            material={materials['Topmat.001']}
            skeleton={nodes.Tops.skeleton}
            castShadow
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/NPC2.glb')

export default Npc2;