import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Doctor(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/lung-cancer-models/Doctor.glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !mixer) return;

    const pushUpAction = actions['pushUp'];

    if (pushUpAction) {
      pushUpAction.reset()
        .setLoop(THREE.LoopRepeat)
        .fadeIn(0.2)
        .play();
    }

    return () => {
      if (pushUpAction) pushUpAction.stop();
    };
  }, [actions, mixer]);

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
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
