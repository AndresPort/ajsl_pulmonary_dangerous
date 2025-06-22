import { create } from "zustand";

const useSmoker3Store = create((set) => ({
    currentAnimation: "Idle",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useSmoker3Store;