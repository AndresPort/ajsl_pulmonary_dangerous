import { Text3D } from "@react-three/drei";

const Title = ({title, position = [-3, 6.5, 0], fontSize = 0.5}) => {
  return (
    <Text3D 
    position={position}
    anchorX={"center"}
    anchorY={"middle"}
    fontSize={fontSize}
    font="/fonts/Roboto_Regular.json"
    maxWidth={5}
    curveSegments={32}
    bevelEnabled
    bevelThickness={0.01}
    bevelSize={0.02}
    bevelOffset={0}
    bevelSegments={8}
    >
      <meshBasicMaterial color="#15223f" />
      {title}
    </Text3D>
  )
}

export default Title;