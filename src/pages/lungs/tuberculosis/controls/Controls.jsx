import { OrbitControls } from "@react-three/drei";

const Controls = () => {
    return (
        <OrbitControls
            maxPolarAngle={Infinity}     
            minPolarAngle={0}
            maxAzimuthAngle={Infinity} 
            minAzimuthAngle={-Infinity} 
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
