import { create } from "zustand";

const useManStore = create((set) => ({
    currentAnimation: "Normal",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useManStore;