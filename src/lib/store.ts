import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ZustandStoreState {
  logo: string;
  setLogo: (logo: string) => void;

  imageModal: tImageModal;
  setImageModal: (imageModal: tImageModal) => void;
}

interface TabState {
  activeTab: "list" | "grid";
  setActiveTab: (tab: "list" | "grid") => void;
}

export const useZustandStore = create<ZustandStoreState>()((set) => ({
  logo: "/images/logo-white-tb.png",
  setLogo: (logo) => set({ logo }),

  imageModal: { active: false, index: 0 },
  setImageModal: (imageModal) => set({ imageModal }),
}));

export const useActiveTabStore = create<TabState>()(
  persist(
    (set) => ({
      activeTab: "list",
      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    {
      name: "active-tab", // localStorage key
    },
  ),
);
