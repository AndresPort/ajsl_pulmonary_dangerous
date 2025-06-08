import {Sparkles} from "@react-three/drei";
  
  const StagingOxygen = () => {
    return (
        <Sparkles
        count={150} // Number of particles (default: 100)
        speed={1.1} // Speed of particles (default: 1)
        opacity={0.7} // Opacity of particles (default: 1)
        color={"green"} // Color of particles (default: 100)
        size={2} // Size of particles (default: randomized between 0 and 1)
        scale={[10, 10, 10]} // The space the particles occupy (default: 1)
        noise={1} // Movement factor (default: 1)
      />
    )}
export default StagingOxygen