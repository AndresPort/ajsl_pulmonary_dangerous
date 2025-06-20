// use-sweat-store.js (o el nombre real)
import { create } from 'zustand';

const  UseSweatStore = create((set) => ({
  currentAnimation: 'initialPose',
  setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
}));

export default UseSweatStore;