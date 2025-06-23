import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import usePersonStore from "/src/stores/pneumonia-stores/use-person-store";
import * as THREE from 'three'; // Asegúrate de importar esto si no lo has hecho

const PersonCoughing = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/pneumonia/person.glb"
  );
  const { actions } = useAnimations(animations, group);
  const currentAnimation = usePersonStore((state) => state.currentAnimation);

  useEffect(() => {
    if (actions && currentAnimation && group.current) {
        if (actions[currentAnimation]) {
            actions[currentAnimation]
                .reset()
                .setLoop(THREE.LoopRepeat)
                .fadeIn(0.2)
                .play();
        }

        if (currentAnimation === "MiddleCough") {
            group.current.rotation.set(3, Math.PI / 100, 0);
            group.current.position.set(0, 1.5, -6);
        } else {
            group.current.rotation.set(Math.PI / 2, 0, 0);
            group.current.position.set(0, -1.1, 0);
        }
    }
}, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={0.01}>
          <skinnedMesh
            name="Person"
            geometry={nodes.Person.geometry}
            material={materials.PersonMaterial}
            skeleton={nodes.Person.skeleton}
            castShadow
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default PersonCoughing;

useGLTF.preload("models-3d/pneumonia/person.glb");
