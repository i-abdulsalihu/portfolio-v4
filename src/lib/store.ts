import { create } from "zustand";

interface ZustandStoreState {
  logo: string;
  setLogo: (logo: string) => void;

  imageModal: tImageModal;
  setImageModal: (imageModal: tImageModal) => void;
}

export const useZustandStore = create<ZustandStoreState>()((set) => ({
  logo: "/images/logo-white-tb.png",
  setLogo: (logo) => set({ logo }),

  imageModal: { active: false, index: 0 },
  setImageModal: (imageModal) => set({ imageModal }),
}));
