import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const SickLungsSemiVisibles = (props) => {
  const { scene } = useGLTF("models-3d/lung-cancer-models/sick-lungs-semi-visibles.glb");
  const lungsRef = useRef();

  // Clonar la escena para evitar compartir referencias entre Canvas
  const clonedScene = useMemo(() => clone(scene), [scene]);

  // Animación de respiración
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const baseScale = 0.0055;
    const breathing = Math.sin(time * 2) * 0.0001;
    if (lungsRef.current) {
      const newScale = baseScale + breathing;
      lungsRef.current.scale.set(newScale, newScale, newScale);
    }
  });

  // Activar sombras
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clonedScene]);

  return (
    <primitive
      object={clonedScene}
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
