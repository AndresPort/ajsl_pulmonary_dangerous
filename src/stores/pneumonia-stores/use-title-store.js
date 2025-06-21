import { create } from 'zustand';

const useTitleStore = create((set) => ({
  title: "Vacunación",
  setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTitleStore; 