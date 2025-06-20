import { create } from 'zustand';

const UseDoctorAnimationStore = create((set) => ({
  currentAnimation: 'Staying',
  setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
}));

export default UseDoctorAnimationStore;