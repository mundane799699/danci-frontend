import { create } from "zustand";
import { Subscribe } from "@/types/Subscribe";

interface SubscribeMailStore {
  subscribe: Subscribe | null;
  setSubscribe: (subscribe: Subscribe | null) => void;
}

export const useSubscribeMailStore = create<SubscribeMailStore>((set) => ({
  subscribe: null,
  setSubscribe: (subscribe) => set({ subscribe }),
}));
