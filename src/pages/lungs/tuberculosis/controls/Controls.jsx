import { OrbitControls } from "@react-three/drei";

const Controls = () => {
    return (
        <OrbitControls
            maxPolarAngle={1.75}
            minPolarAngle={1}
            maxAzimuthAngle={0.75}
            minAzimuthAngle={-0.75}
            enableZoom={false}
            enablePan={false}
            target={[0, 1, 0]}
            enableDamping={true}
            dampingFactor={0.25}
            autoRotate={false}
        />
    );
};

export default Controls;