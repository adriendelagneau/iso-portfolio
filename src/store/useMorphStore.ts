import { create } from "zustand";

interface MorphStore {
  targetIndex: number;
  isAnimating: boolean;
  // Populated by ParticlesModel from whatever meshes Particules.glb
  // actually contains, so SidebarParticles can render one button per shape
  // without either side hardcoding a shape count or their names.
  shapeNames: string[];

  setTargetIndex: (index: number) => void;
  setIsAnimating: (value: boolean) => void;
  setShapeNames: (names: string[]) => void;
}

export const useMorphStore = create<MorphStore>((set) => ({
  targetIndex: 0,
  isAnimating: false,
  shapeNames: [],

  setTargetIndex: (index) => set((state) => (state.isAnimating ? state : { targetIndex: index })),

  setIsAnimating: (value) => set({ isAnimating: value }),

  setShapeNames: (names) => set({ shapeNames: names }),
}));
