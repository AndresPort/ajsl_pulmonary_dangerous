// use-sound-store.js
import { create } from "zustand";

const useSoundStore = create((set) => {
  let audio = null;

  return {
    reproducir: (src) => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio = new Audio(src);
      audio.play();
    },
    detener: () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    },
  };
});

export default useSoundStore;
