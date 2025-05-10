import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const HealthyLungSemiVisible = (props) => {
  const HealthyLungSemiVisibleModel = useGLTF(
    "/models-3d/healthy-lung-semi-visible/healthy-lungs-semi-visible.glb"
  );
  const lungsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const baseScale = 0.0064; // El tamaño inicial
    const breathing = Math.sin(time * 2) * 0.0001; // Más movimiento
    if (lungsRef.current) {
      const newScale = baseScale + breathing;
      lungsRef.current.scale.set(newScale, newScale, newScale);
    }
  });

  useEffect(() => {
    if (!HealthyLungSemiVisibleModel) return;

    HealthyLungSemiVisibleModel.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [HealthyLungSemiVisibleModel]);

  return (
    <primitive
      object={HealthyLungSemiVisibleModel.scene}
      ref={lungsRef}
      scale={0.05}
      castShadow
      receiveShadow
      {...props}
    />
  );
};

export default HealthyLungSemiVisible;

useGLTF.preload(
  "/models-3d/healthy-lungs-semi-visible/healthy-lung-semi-visible.glb"
);
