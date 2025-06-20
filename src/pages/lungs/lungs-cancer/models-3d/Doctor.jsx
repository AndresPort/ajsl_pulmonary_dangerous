import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import UseDoctorAnimationStore from '../../../../stores/lung-cancer-stores/use-doctor-animation-store';

export function Doctor(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/lung-cancer-models/Doctor.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const { currentDoctorAnimation, setCurrentDoctorAnimation } = UseDoctorAnimationStore();

  // Manejo de animaciones y transiciones automáticas
  useEffect(() => {
  if (!actions || !currentDoctorAnimation || !mixer) return;

  Object.values(actions).forEach((action) => action.stop());

  const selectedAction = actions[currentDoctorAnimation];
  if (!selectedAction) {
    console.warn(`No se encontró la animación: ${currentDoctorAnimation}`);
    return;
  }

  if (currentDoctorAnimation === 'pushUp') {
    selectedAction.setLoop(THREE.LoopRepeat);
  } else {
    selectedAction.setLoop(THREE.LoopOnce);
    selectedAction.clampWhenFinished = true;
  }

  selectedAction.reset().fadeIn(0.2).play();

  const handleFinish = (e) => {
    if (e.action === selectedAction) {
      if (currentDoctorAnimation === 'idleToPushUp') {
        setCurrentDoctorAnimation('pushUp');
      } else if (currentDoctorAnimation === 'pushUpToIdle') {
        setCurrentDoctorAnimation('Staying');
      }
    }
  };

  mixer.addEventListener('finished', handleFinish);
  return () => {
    mixer.removeEventListener('finished', handleFinish);
    selectedAction.stop();
  };
}, [currentDoctorAnimation, actions, mixer, setCurrentDoctorAnimation]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[-0.938, -80, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <skinnedMesh
            name="Hat"
            castShadow
            geometry={nodes.Hat.geometry}
            material={materials.MaskHatMaterial}
            skeleton={nodes.Hat.skeleton}
          />
          <skinnedMesh
            name="Mask"
            castShadow
            geometry={nodes.Mask.geometry}
            material={materials.MaskHatMaterial}
            skeleton={nodes.Mask.skeleton}
          />
          <skinnedMesh
            name="Pants"
            castShadow
            geometry={nodes.Pants.geometry}
            material={materials.SkinMaterial}
            skeleton={nodes.Pants.skeleton}
          />
          <skinnedMesh
            name="Shirt"
            castShadow
            geometry={nodes.Shirt.geometry}
            material={materials.SkinMaterial}
            skeleton={nodes.Shirt.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            castShadow
            geometry={nodes.Shoes.geometry}
            material={materials.MaskHatMaterial}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Skin"
            castShadow
            geometry={nodes.Skin.geometry}
            material={materials.SkinMaterial}
            skeleton={nodes.Skin.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

export default Doctor;
useGLTF.preload('/models-3d/lung-cancer-models/Doctor.glb');
