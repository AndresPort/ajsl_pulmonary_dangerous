import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import usePersonStore from '/src/stores/pneumonia-stores/use-person-store';

const PersonCoughing = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('models-3d/pneumonia/person.glb');
    const { actions } = useAnimations(animations, group);
    const currentAnimation = usePersonStore((state) => state.currentAnimation);

    useEffect(() => {
        if (actions && currentAnimation && group.current) {
            Object.values(actions).forEach((action) => action.stop()); // Stop all animations
            if (actions[currentAnimation]) {
                actions[currentAnimation].reset().play(); // Play the selected animation
            }

            // Conditionally update rotation and position
            if (currentAnimation === "MiddleCough") {
                group.current.rotation.set(3, Math.PI / 100, 0); // Example rotation
                group.current.position.set(0, 1.5, -6); // Example position
            } else {
                group.current.rotation.set(Math.PI / 2, 0, 0); // Default rotation
                group.current.position.set(0, -3, 0); // Default position
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

useGLTF.preload('models-3d/pneumonia/person.glb');