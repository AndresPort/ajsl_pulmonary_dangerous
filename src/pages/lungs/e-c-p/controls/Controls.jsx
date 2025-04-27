import { OrbitControls } from "@react-three/drei";

const Controls = () => {
    return (
        <OrbitControls
            //maxPolarAngle={1.75}
            //minPolarAngle={1}
            //maxAzimuthAngle={0.75}
            //minAzimuthAngle={-0.75}
            enableZoom={true}
            enablePan={true}
            target={[0, 0, 0]}
            enableDamping={true}  // Smooth movement
            dampingFactor={0.25} // Adjust damping strength
            autoRotate={false}
        />
    );
};

export default Controls;