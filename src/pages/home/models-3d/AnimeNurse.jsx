import { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AnimeNurse = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/lung-cancer-models/AnimeNurse.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions?.HighGreetings) {
      actions.HighGreetings.play();
      return () => {
        actions.HighGreetings?.stop();
      };
    }
  }, [actions?.HighGreetings]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0.046, -0.552, -0.009]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <skinnedMesh
            name="LeftSide"
            geometry={nodes.LeftSide.geometry}
            material={materials.RightAndLeftSideMateria}
            skeleton={nodes.LeftSide.skeleton}
          />
          <skinnedMesh
            name="RightSide"
            geometry={nodes.RightSide.geometry}
            material={materials.RightAndLeftSideMateria}
            skeleton={nodes.RightSide.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default AnimeNurse;

useGLTF.preload("/models-3d/lung-cancer-models/AnimeNurse.glb");
