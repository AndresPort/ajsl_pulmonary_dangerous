import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const SickLungsSemiVisibles = (props) => {
  const SickLungsSemiVisiblesModel = useGLTF("models-3d/lung-cancer-models/sick-lungs-semi-visibles.glb");
  const lungsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const baseScale = 0.0055; // El tamaño inicial
    const breathing = Math.sin(time * 2) * 0.0001; // Más movimiento
    if (lungsRef.current) {
      const newScale = baseScale + breathing;
      lungsRef.current.scale.set(newScale, newScale, newScale);
    }
  });

  useEffect(() => {
    if (!SickLungsSemiVisiblesModel) return;

    SickLungsSemiVisiblesModel.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [SickLungsSemiVisiblesModel]);

  return (
    <primitive
      object={SickLungsSemiVisiblesModel.scene}
      ref={lungsRef}
      scale={0.003}
      castShadow
      receiveShadow
      {...props}
    />
  );
};

export default SickLungsSemiVisibles;

useGLTF.preload("models-3d/lung-cancer-models/sick-lungs-semi-visibles.glb");
