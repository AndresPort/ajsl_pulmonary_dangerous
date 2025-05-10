import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function SaneLungs(props) {
  const { nodes, materials } = useGLTF("/models-3d/e-c-p/SaneLungs.glb");
  const lungsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = 9 + Math.sin(time * 2) * 0.2;
    if (lungsRef.current) {
      lungsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group {...props} dispose={null} ref={lungsRef}>
        {Object.keys(nodes).map((key) => {
          const node = nodes[key];
          if (!node.geometry) return null;
          return (
            <mesh
              key={key}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={Object.values(materials)[0]}
            />
          );
        })}
    </group>
  );
}

export default SaneLungs;

useGLTF.preload("/models-3d/e-c-p/SaneLungs.glb");
