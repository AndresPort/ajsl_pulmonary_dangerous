import {Text3D} from "@react-three/drei"

const Title3d2 = () => {
    return(
        <Text3D 
        position={[-2.5,2,0]} 
        font="fonts/Alice.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        letterSpacing={0.01}
        size={0.5}
        >
            Pulmon antes de enfermar
            <meshNormalMaterial/>
        </Text3D>
    )
}

export default Title3d2;