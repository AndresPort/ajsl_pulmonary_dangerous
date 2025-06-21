import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useManStore from '/src/stores/pneumonia-stores/use-man-store';
import vacunacionData from '../data/data.json';

const VaccineNeedle = (props) => {
  const { nodes, materials } = useGLTF('models-3d/pneumonia/vaccine_needle.glb')
  const needlePosition = useManStore(state => state.needlePosition);
  const needleVisible = useManStore(state => state.needleVisible);
  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Cambia el cursor al hacer hover
  React.useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = '';
    }
    return () => { document.body.style.cursor = ''; };
  }, [hovered]);

  return (
    <group {...props} dispose={null}>
      {needleVisible && (
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          castShadow
          receiveShadow
          position={needlePosition}
          scale={hovered ? 0.45 : 0.4}
          rotation={[0, 0, Math.PI / 2]}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={() => setShowPopup(true)}
        />
      )}
      {showPopup && (
        <Html fullscreen style={{ pointerEvents: 'auto' }}>
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.85)',
              color: '#fff',
              padding: '24px 32px',
              borderRadius: '16px',
              zIndex: 2000,
              boxShadow: '0 4px 24px #000a',
              maxWidth: 400,
              textAlign: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: 'absolute', top: 8, right: 16, cursor: 'pointer', fontSize: 22 }} onClick={() => setShowPopup(false)}>&#10006;</div>
            <h3 style={{ marginBottom: 16 }}>Vacunación</h3>
            <div style={{ fontSize: 18 }}>{vacunacionData.vacunacion}</div>
          </div>
          {/* Fondo oscuro para cerrar al hacer click fuera */}

        </Html>
      )}
    </group>
  )
}

import { Html } from '@react-three/drei';
export default VaccineNeedle;

useGLTF.preload('models-3d/pneumonia/vaccine_needle.glb')