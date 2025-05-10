import { create } from "zustand";

const usePersonStore = create((set) => ({
    currentAnimation: "Idle",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default usePersonStore;