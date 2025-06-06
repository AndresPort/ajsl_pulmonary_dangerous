import { Text } from "@react-three/drei";
import './html-3d.css';

const TreatmentText = ({ text }) => {

    return (
        <group>
            <mesh
                position={[-4, 1, -0.01]} // Un poco detrás del texto (z negativo)
                rotation={[0, Math.PI / 12, 0]}
            >
                <planeGeometry args={[6.5, 5.2]} />
                <meshBasicMaterial color={"black"} transparent opacity={0.7} />
            </mesh>
            <Text
                position={[-4, 1, 0]}
                font={"/fonts/Roboto-Regular.ttf"}
                fontSize={0.5}
                color="white"
                maxWidth={6}
                lineHeight={1.1}
                rotation={[0, Math.PI / 12, 0]}
            >
                {text}
            </Text>
        </group>
    )
}

export default TreatmentText;