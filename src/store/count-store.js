// For creating our custom count store hook
import { create } from 'zustand';

export const useCountStore = create((set) => ({
  // State
  count: 0,
  // Action: state setter
  incrementCount: () => set((state) => ({ count: state.count + 1 })),

  theArray: [],
  addToArray: (newNumber) =>
    set((state) => ({ theArray: [...state.theArray, newNumber] })),
}));
