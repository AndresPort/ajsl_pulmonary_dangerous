import { create } from 'zustand';

const UseDoctorAnimationStore = create((set) => ({
  currentDoctorAnimation: 'Staying',
  setCurrentDoctorAnimation: (animation) =>
    set({ currentDoctorAnimation: animation }), // ✅ aquí estaba el error
}));

export default UseDoctorAnimationStore;
