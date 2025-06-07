import { create } from "zustand";

const useNurseStore = create((set) => ({
    currentAnimation: "SittingIdle",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useNurseStore;