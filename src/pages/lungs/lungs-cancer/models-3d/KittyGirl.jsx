
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/lung-cancer-models/KittyGirl.glb')
  const { actions } = useAnimations(animations, group)


useEffect(() => {
    actions.Smoking.play();
    return () => actions.Smoking.stop();
    },[actions.Smoking]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="KittyGirlArmature" rotation={[Math.PI / 2, 0, 0]} scale={0.001} >
          <skinnedMesh
            name="AboveHair"
            geometry={nodes.AboveHair.geometry}
            material={materials.AboveHairMaterial}
            skeleton={nodes.AboveHair.skeleton}
          />
          <skinnedMesh
            name="BelowHair"
            geometry={nodes.BelowHair.geometry}
            material={materials.BelowHairFringeMaterial}
            skeleton={nodes.BelowHair.skeleton}
          />
          <skinnedMesh
            name="Blouse"
            geometry={nodes.Blouse.geometry}
            material={materials.BlouseHeadCharmJacketSocksMaterial}
            skeleton={nodes.Blouse.skeleton}
          />
          <skinnedMesh
            name="boots"
            geometry={nodes.boots.geometry}
            material={materials.BootsJacketCoatShortMaterial}
            skeleton={nodes.boots.skeleton}
          />
          <skinnedMesh
            name="Ears"
            geometry={nodes.Ears.geometry}
            material={materials.EarsMaterial}
            skeleton={nodes.Ears.skeleton}
          />
          <skinnedMesh
            name="Fringe"
            geometry={nodes.Fringe.geometry}
            material={materials.BelowHairFringeMaterial}
            skeleton={nodes.Fringe.skeleton}
          />
          <skinnedMesh
            name="Head"
            geometry={nodes.Head.geometry}
            material={materials.HeadMaterial}
            skeleton={nodes.Head.skeleton}
            morphTargetDictionary={nodes.Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="HeadCharm"
            geometry={nodes.HeadCharm.geometry}
            material={materials.BlouseHeadCharmJacketSocksMaterial}
            skeleton={nodes.HeadCharm.skeleton}
          />
          <skinnedMesh
            name="Jacket"
            geometry={nodes.Jacket.geometry}
            material={materials.BlouseHeadCharmJacketSocksMaterial}
            skeleton={nodes.Jacket.skeleton}
          />
          <skinnedMesh
            name="JacketCoat"
            geometry={nodes.JacketCoat.geometry}
            material={materials.BootsJacketCoatShortMaterial}
            skeleton={nodes.JacketCoat.skeleton}
          />
          <skinnedMesh
            name="Shorts"
            geometry={nodes.Shorts.geometry}
            material={materials.BootsJacketCoatShortMaterial}
            skeleton={nodes.Shorts.skeleton}
          />
          <skinnedMesh
            name="SkinBody"
            geometry={nodes.SkinBody.geometry}
            material={materials.SkinBodyTailMaterial}
            skeleton={nodes.SkinBody.skeleton}
          />
          <skinnedMesh
            name="Socks"
            geometry={nodes.Socks.geometry}
            material={materials.BlouseHeadCharmJacketSocksMaterial}
            skeleton={nodes.Socks.skeleton}
          />
          <skinnedMesh
            name="Tail"
            geometry={nodes.Tail.geometry}
            material={materials.SkinBodyTailMaterial}
            skeleton={nodes.Tail.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/lung-cancer-models/KittyGirl.glb')