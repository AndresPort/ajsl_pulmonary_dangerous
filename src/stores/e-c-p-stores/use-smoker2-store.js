import { create } from "zustand";

const useSmoker2Store = create((set) => ({
    currentAnimation: 'Idle',
    setCurrentAnimation: (animation) => set(() => ({ currentAnimation: animation, })),
}));

export default useSmoker2Store;