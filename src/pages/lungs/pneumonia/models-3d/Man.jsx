import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useManStore from '/src/stores/pneumonia-stores/use-man-store';

const Man =(props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/pneumonia/man-model.glb')
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useManStore((state) => state.currentAnimation);
  const pauseSitting = useManStore((state) => state.pauseSitting);
  const pauseRunning = useManStore((state) => state.pauseRunning);

  useEffect(() => {
    if (actions && actions[currentAnimation]) {
      actions[currentAnimation].reset().play();
    }
    if (actions && actions['Sitting']) {
      actions['Sitting'].paused = pauseSitting;
      // Si la animación actual es Running, detén Sitting para evitar mezclas
      if (currentAnimation === 'Running') {
        actions['Sitting'].stop();
      }
    }
    if (actions && actions['Running']) {
      actions['Running'].paused = pauseRunning;
      // Si la animación actual es Sitting, detén Running para evitar mezcla
      if (currentAnimation === 'Sitting') {
        actions['Running'].stop();
      }
    }
  }, [actions, currentAnimation, pauseSitting])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Man"
            geometry={nodes.Man.geometry}
            material={materials.ManMaterial}
            skeleton={nodes.Man.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

export default Man;

useGLTF.preload('models-3d/pneumonia/man-model.glb')