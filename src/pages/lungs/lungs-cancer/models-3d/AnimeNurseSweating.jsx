import { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AnimeNurseSweating = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/lung-cancer-models/AnimeNurse.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions?.initialPose) {
      actions.initialPose.play();
      return () => {
        actions.initialPose?.stop();
      };
    }
  }, [actions?.initialPose]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0.046, -55, -0.009]} 
          rotation={[Math.PI / 1.95, 0, 0]}
        >
          <skinnedMesh
            name="LeftSide"
            geometry={nodes.LeftSide.geometry}
            material={materials.RightAndLeftSideMaterial}
            skeleton={nodes.LeftSide.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="RightSide"
            geometry={nodes.RightSide.geometry}
            material={materials.RightAndLeftSideMaterial}
            skeleton={nodes.RightSide.skeleton}
            castShadow
            receiveShadow
          />
          <primitive 
            object={nodes.mixamorigHips} 
            castShadow
            receiveShadow/>
        </group>
      </group>
    </group>
  );
};

export default AnimeNurseSweating;

useGLTF.preload("/models-3d/lung-cancer-models/AnimeNurse.glb");
