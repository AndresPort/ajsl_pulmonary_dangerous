import { useGLTF, Float } from "@react-three/drei";

const PneumoniaLungs = (props) => {

    const {nodes, materials} = useGLTF("models-3d/pneumonia/pneumonia-lungs.glb");



    return (
        <group {...props} dispose={null}>
            <Float floatIntensity={3} speed={4} rotationIntensity={0} rotation={[0, Math.PI / 1.7, 0]}>
                <mesh geometry={nodes.PneunoniaLungs.geometry} material={materials.PneumoniaLungsMaterial} castShadow>
                </mesh>
            </Float>
        </group>
    )
}

export default PneumoniaLungs;

useGLTF.preload("models-3d/pneumonia/pneumonia-lungs.glb");