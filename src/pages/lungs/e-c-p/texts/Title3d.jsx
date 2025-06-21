import {Text3D} from "@react-three/drei"

const Title3d = () => {
    return(
        <Text3D 
        position={[-4,-0.5,4]} 
        font="fonts/Alice.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        letterSpacing={0.01}
        size={0.5}
        >
            Selecciona los objetos sobre la mesa
            <meshPhysicalMaterial/>
        </Text3D>
    )
}

export default Title3d;
