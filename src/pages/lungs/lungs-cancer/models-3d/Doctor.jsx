import { useGLTF } from '@react-three/drei'

export function Doctor(props) {
  const { nodes, materials } = useGLTF('/models-3d/lung-cancer-models/Doctor.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hat.geometry}
        material={materials.MaskHatMaterial}
        position={[1.604, -80, -3.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mask.geometry}
        material={materials.MaskHatMaterial}
        position={[1.604, -80, -3.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pants.geometry}
        material={materials.SkinMaterial}
        position={[1.604, -80, -3.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shirt.geometry}
        material={materials.SkinMaterial}
        position={[1.604, -80, -3.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shoes.geometry}
        material={materials.MaskHatMaterial}
        position={[1.604, -80, -3.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skin.geometry}
        material={materials.SkinMaterial}
        position={[1.604, -80, -3.147]}
      />
    </group>
  )
}

export default Doctor;
useGLTF.preload('/models-3d/lung-cancer-models/Doctor.glb')