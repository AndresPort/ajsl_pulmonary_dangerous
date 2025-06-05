// AnimeNurseSweating.jsx
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import UseSweatStore from "../../../../stores/lung-cancer-stores/use-sweat-store";

const AnimeNurseSweating = (props) => {
  const group = useRef();
  const armatureRef = useRef(); // NUEVO
  const { nodes, materials, animations } = useGLTF("/models-3d/lung-cancer-models/AnimeNurse.glb");
  const { actions } = useAnimations(animations, group);
  const { currentAnimation } = UseSweatStore();

  // Manejo de animaciones
  useEffect(() => {
    if (!actions || !currentAnimation) return;

    Object.values(actions).forEach((action) => action.stop());
    const selectedAction = actions[currentAnimation];
    if (selectedAction) {
      selectedAction.reset().play();
    } else {
      console.warn(`No se encontró la animación: ${currentAnimation}`);
    }

    return () => {
      selectedAction?.stop();
    };
  }, [currentAnimation, actions]);

  // Manejo de rotación del modelo al cambiar animación
  useEffect(() => {
    if (!armatureRef.current) return;

    if (currentAnimation === "SevereCoughLaying") {
      armatureRef.current.rotation.set(3, 0, 0); // Modelo de pie
      armatureRef.current.position.set(0, -10, -60); // Ajusta esta si es necesario
    } else {
      armatureRef.current.rotation.set(Math.PI / 1.95, 0, 0); // Modelo acostado
      armatureRef.current.position.set(0.046, -55, -0.009);
    }
  }, [currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          ref={armatureRef}
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
          <primitive object={nodes.mixamorigHips} castShadow receiveShadow />
        </group>
      </group>
    </group>
  );
};

export default AnimeNurseSweating;
useGLTF.preload("/models-3d/lung-cancer-models/AnimeNurse.glb");
