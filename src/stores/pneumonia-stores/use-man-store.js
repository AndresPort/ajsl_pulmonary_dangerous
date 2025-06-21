import { create } from "zustand";

const useManStore = create((set) => ({
    currentAnimation: "Sitting",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation })),

    needlePosition: [1.5, -0.5, 0.1],
    setNeedlePosition: (pos) => set(() => ({ needlePosition: pos })),

    chairVisible: true,
    setChairVisible: (visible) => set(() => ({ chairVisible: visible })),

    pauseSitting: false,
    setPauseSitting: (pause) => set({ pauseSitting: pause }),
    pauseRunning: false,
    setPauseRunning: (pause) => set({ pauseRunning: pause }),

    needleVisible: true,
    setNeedleVisible: (visible) => set(() => ({ needleVisible: visible })),
}));

export default useManStore;