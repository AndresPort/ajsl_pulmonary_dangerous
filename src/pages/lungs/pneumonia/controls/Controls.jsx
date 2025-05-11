import { OrbitControls } from "@react-three/drei";

const Controls = () => {
    return (
        <OrbitControls
            enableZoom={true}
            minDistance={2} // Minimum zoom distance
            maxDistance={20} // Maximum zoom distance
            enablePan={true}
            target={[0, 0, 0]}
            enableDamping={true}  // Smooth movement
            dampingFactor={0.25} // Adjust damping strength
            autoRotate={false}
        />
    );
};

export default Controls;
