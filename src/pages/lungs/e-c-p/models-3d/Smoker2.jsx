import { useEffect, useRef, forwardRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import useSmoker2Store from '../../../../stores/e-c-p-stores/use-smoker2-store'

const Smoker2 = (props, ref) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/e-c-p/Smoker2.glb')
    const { actions } = useAnimations(animations, group)
    const currentAnimation = useSmoker2Store((state) => state.currentAnimation);
    useEffect(() => {
        if (actions && currentAnimation && group.current) {
            Object.values(actions).forEach((action) => action.stop());
            if (actions[currentAnimation]) {
                actions[currentAnimation].reset().play();
            }
        }
    }, [actions, currentAnimation]);

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" ref={group}>
                    <skinnedMesh
                        name="EyeLeft"
                        geometry={nodes.EyeLeft.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeLeft.skeleton}
                        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                        castShadow
                    />
                    <skinnedMesh
                        name="EyeRight"
                        geometry={nodes.EyeRight.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeRight.skeleton}
                        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Body"
                        geometry={nodes.Wolf3D_Body.geometry}
                        material={materials.Wolf3D_Body}
                        skeleton={nodes.Wolf3D_Body.skeleton}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Hair"
                        geometry={nodes.Wolf3D_Hair.geometry}
                        material={materials.Wolf3D_Hair}
                        skeleton={nodes.Wolf3D_Hair.skeleton}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Head"
                        geometry={nodes.Wolf3D_Head.geometry}
                        material={materials.Wolf3D_Skin}
                        skeleton={nodes.Wolf3D_Head.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                        castShadow
                        onClick={() => { actions.Twerk.play() }}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Bottom"
                        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                        material={materials.Wolf3D_Outfit_Bottom}
                        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Footwear"
                        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                        material={materials.Wolf3D_Outfit_Footwear}
                        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Top"
                        geometry={nodes.Wolf3D_Outfit_Top.geometry}
                        material={materials.Wolf3D_Outfit_Top}
                        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                        castShadow
                    />
                    <skinnedMesh
                        name="Wolf3D_Teeth"
                        geometry={nodes.Wolf3D_Teeth.geometry}
                        material={materials.Wolf3D_Teeth}
                        skeleton={nodes.Wolf3D_Teeth.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                        castShadow
                    />
                    <primitive object={nodes.Hips} />
                </group>
            </group>
        </group>
    )
}

export default Smoker2;

useGLTF.preload('/Smoker2.glb')