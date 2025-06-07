import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const SecondaryLight = ({ position = [-5, 8, 5] }) => {
  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 1, "#00BFFF");

  return (
    <>
      <pointLight
 
        color="#00BFFF"
        intensity={100}
        position={position}
        distance={300}
        decay={2}
        castShadow
      />
      <ambientLight intensity={1} />
    </>
  );
};

export default SecondaryLight;
