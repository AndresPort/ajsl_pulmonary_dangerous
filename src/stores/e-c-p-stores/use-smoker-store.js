import { create } from "zustand";

const useSmokerStore = create((set) => ({
    currentAnimation: "Idle",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useSmokerStore;