import { Float, Center, Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import './Button.css';

const Button = ({ label, onClick }) => {
  const { gl } = useThree();

  return (
    <Float speed={0.3} rotationIntensity={0.2} floatIntensity={0.2}>
      <Center position={[0, -2, 1]}>
        <Text3D
          font="/fonts/tondu.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.02}
          size={0.3}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={() => (gl.domElement.style.cursor = 'pointer')}
          onPointerOut={() => (gl.domElement.style.cursor = 'auto')}
          className="button-3d"
        >
          {label}
          <meshStandardMaterial color="#blue" emissive="#2980b9" />
        </Text3D>
      </Center>
    </Float>
  );
};

export default Button;
