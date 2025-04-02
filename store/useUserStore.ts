import { create } from "zustand";
import { User } from "@/types/user";
import { getCurrentUser } from "@/services/login";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    try {
      const { user } = get();
      if (user) {
        return;
      }
      const data = (await getCurrentUser()) as any;
      console.log(data);
      set({ user: data });
    } catch (error: any) {
      console.log(error);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
