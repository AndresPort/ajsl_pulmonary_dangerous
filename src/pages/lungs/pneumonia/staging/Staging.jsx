import { Environment, Sky } from "@react-three/drei";

const Staging = () => {
  return (

    <Sky
        distance={4500} // Distance from the camera to the sky
        sunPosition={[100, 20, 100]} // Position of the sun in the sky
        inclination={0} // Angle of the sun's inclination
        azimuth={0} // Angle of the sun's azimuth
        turbidity={10} // Turbidity of the atmosphere
        rayleigh={1} // Rayleigh scattering factor
        mieCoefficient={0.005} // Mie scattering coefficient
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