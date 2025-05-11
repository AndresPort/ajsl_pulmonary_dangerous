import { useEffect,useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useManStore from '/src/stores/tuberculosis-stores/use-man-store.js';


export function ManCoughing(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/tuberculosis/ManCoughing.glb')
  const { actions } = useAnimations(animations, group)
  const currentAnimation = useManStore((state) => state.currentAnimation);

  useEffect(() => {
        if (actions && currentAnimation && group.current) {
            Object.values(actions).forEach((action) => action.stop());
            if (actions[currentAnimation]) {
                actions[currentAnimation].reset().play();
            }

            if (currentAnimation === "Coughing") {
                group.current.rotation.set(1.5, Math.PI / 100,0);
                group.current.position.set(0, 1.1, -3.5); 
            } else {
                group.current.rotation.set(Math.PI / 100, 0, 0);
                group.current.position.set(0, -2, 0); 
            }
        }
    }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="temp"
            geometry={nodes.temp.geometry}
            material={materials['Material.001']}
            skeleton={nodes.temp.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/tuberculosis/ManCoughing.glb')
