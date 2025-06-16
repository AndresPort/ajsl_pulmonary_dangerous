import { useGLTF } from "@react-three/drei";

const Chair = (props) => {
    const { nodes, materials } = useGLTF("models-3d/pneumonia/chair.glb");
    
    return (
        <group  {...props} dispose={null}>
            <mesh geometry={nodes.Chair.geometry} material={materials.ChairMaterial} castShadow></mesh>
        </group>
    )
}

export default Chair;

useGLTF.preload("models-3d/pneumonia/chair.glb");