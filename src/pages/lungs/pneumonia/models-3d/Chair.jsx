import { useGLTF } from "@react-three/drei";
import useManStore from '/src/stores/pneumonia-stores/use-man-store'; // 

const Chair = (props) => {
    const { nodes, materials } = useGLTF("models-3d/pneumonia/chair.glb");
    
    const chairVisible = useManStore(state => state.chairVisible);
    return (
        <group  {...props} dispose={null}>
            {chairVisible && (
                <mesh geometry={nodes.Chair.geometry} material={materials.ChairMaterial} castShadow></mesh>
            )}
        </group>
    )
}

export default Chair;

useGLTF.preload("models-3d/pneumonia/chair.glb");