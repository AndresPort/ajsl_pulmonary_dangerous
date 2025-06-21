import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const Light = ({ position = [-5, 8, 5] }) => {
  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 1, "#66ccff");

  return (
    <>
      <pointLight
 
        color="#FFB74D"
        intensity={80}
        position={position}
        distance={300}
        decay={2}
        castShadow
      />
      <pointLight
        color="#66ccff"
        intensity={100}
        position={[5, 8, 5]}
        distance={300}
        decay={2}
        castShadow
      />
      <ambientLight intensity={1} />
    </>
  );
};

export default Light;
