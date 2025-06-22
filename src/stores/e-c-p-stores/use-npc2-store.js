import { create } from "zustand";

const useNpc2Store = create((set) => ({
    currentAnimation: "Dizzy",
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useNpc2Store;