import { Environment, Sky } from "@react-three/drei";

const Staging = () => {
  return (

    <Sky
        distance={4500} // Distance from the camera to the sky
        sunPosition={[100, 20, 100]} // Position of the sun in the sky
        inclination={0} // Angle of the sun's inclination
        azimuth={0} // Angle of the sun's azimuth
        turbidity={15} // Increased turbidity for a darker, hazier sky
        rayleigh={0.5} // Reduced Rayleigh scattering for less blue light
        mieCoefficient={0.1} // Increased Mie scattering for a darker atmosphere
        mieDirectionalG={0.7} // Mie directional factor
    />

        // <Environment 
        //     preset="sunset" 
        //     background={false}
        //     ground={{
        //         height: 10, 
        //         radius: 60, 
        //         scale: 60, 
        //         receiveShadow: true 
        //     }}
        // />
  );
}

export default Staging;