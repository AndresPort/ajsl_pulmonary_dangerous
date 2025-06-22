import { Html } from "@react-three/drei";
import "./ButtonVideo.css";

const ButtonVideo = ({ isPlaying, onClick }) => (
  <Html center position={[-0.3, -1.3, 2.5]} transform occlude>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="vaccine-button" title="Con P puede pausar el video" onClick={onClick}>
        {isPlaying ? "Cerrar video" : "Ver vacunación"}
      </button>
    </div>
  </Html>
  );

export default ButtonVideo;

