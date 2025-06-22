import { useVideoTexture } from "@react-three/drei";
import { useEffect } from "react";

const VideoVaccine = ({ play }) => {
  const texture = useVideoTexture("/videos/Vaccine.mp4", {
    muted: true,
    loop: true,
    autoplay: false,
    crossOrigin: "anonymous",
  });

  // Cuando se monta, reproducir si se pide
  useEffect(() => {
    if (texture?.image) {
      if (play) {
        texture.image.play().catch(console.warn);
        texture.image.playbackRate = 1.5;
      } else {
        texture.image.pause();
      }
    }
  }, [play, texture]);

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "p" && texture?.image) {
        const video = texture.image;
        if (video.paused) {
          video.play().catch(console.warn);
        } else {
          video.pause();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [texture]);

  return (
    <mesh position={[0, 1.5, -2]}>
      <planeGeometry args={[10, 6.25]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoVaccine;
