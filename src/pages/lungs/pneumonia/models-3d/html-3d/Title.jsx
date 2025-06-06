import { Text3D } from "@react-three/drei";

const Title = ({title}) => {
  return (
    <Text3D 
    position={[-3, 6.5, 0]}
    anchorX={"center"}
    anchorY={"middle"}
    fontSize={0.5}
    font="/fonts/Roboto_Regular.json"
    maxWidth={5}
    curveSegments={32}
    bevelEnabled
    bevelThickness={0.01}
    bevelSize={0.02}
    bevelOffset={0}
    bevelSegments={8}
    >
      <meshBasicMaterial color="black" />
      {title}
    </Text3D>
  )
}

export default Title;