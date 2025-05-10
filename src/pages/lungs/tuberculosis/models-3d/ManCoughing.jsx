import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useGLTF, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';

export const ManCoughing = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/models-3d/tuberculosis/ManCoughing.glb');
    const torsoRef = useRef();
    const animationRef = useRef({ 
      startTime: 0,
      isAnimating: false,
      lastFrameTime: 0
    });
    const [, get] = useKeyboardControls();
  
    useFrame((state) => {
      if (!animationRef.current.isAnimating) return;
  
      const currentTime = state.clock.getElapsedTime();
      
      if (animationRef.current.lastFrameTime === 0) {
        animationRef.current.lastFrameTime = currentTime;
        return;
      }
  
      const delta = currentTime - animationRef.current.lastFrameTime;
      animationRef.current.lastFrameTime = currentTime;
  
      const elapsed = currentTime - animationRef.current.startTime;
      const duration = 2;
      const progress = (elapsed % duration) / duration;
  
      if (progress < 0.25) {
        const strength = Math.sin(progress * Math.PI * 4);
        torsoRef.current.rotation.x = 0.07 * strength;
      } else {
        torsoRef.current.rotation.x *= 0.9;
      }
  
      if (get().stopCough) {
        stopCoughing();
      }
    });
  
    const startCoughing = () => {
      animationRef.current.isAnimating = true;
      animationRef.current.startTime = performance.now() / 1000;
      animationRef.current.lastFrameTime = 0;
    };
  
    const stopCoughing = () => {
      animationRef.current.isAnimating = false;
      gsap.to(torsoRef.current.rotation, { 
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };
  
    useImperativeHandle(ref, () => ({
      startCoughing,
      stopCoughing
    }));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && animationRef.current.isAnimating) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ManCoughing.geometry}
        material={materials.ManCoughingMaterial}
      />
      <mesh
        ref={torsoRef}
        castShadow
        receiveShadow
        geometry={nodes.Torso.geometry}
        material={materials.ManCoughingMaterial}
        position={[0.017, 0.036, -0.182]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arm.geometry}
          material={materials.ManCoughingMaterial}
          position={[-0.017, -0.036, 0.182]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head.geometry}
          material={materials.ManCoughingMaterial}
          position={[-0.017, -0.036, 0.182]}
        />
      </mesh>
    </group>
  )
});

useGLTF.preload('/models-3d/tuberculosis/ManCoughing.glb')
