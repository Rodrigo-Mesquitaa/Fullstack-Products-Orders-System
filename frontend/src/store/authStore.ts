import { create } from "zustand";
import { AuthService } from "../services/authService";

interface AuthState {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: AuthService.getToken(),
  login: async (username, password) => {
    const token = await AuthService.login(username, password);
    set({ token });
  },
  logout: () => {
    AuthService.logout();
    set({ token: null });
  },
}));
