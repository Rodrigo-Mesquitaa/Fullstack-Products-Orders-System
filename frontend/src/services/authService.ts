import { apiRequest } from "./api";

export const AuthService = {
  login: async (username: string, password: string) => {
    const result = await apiRequest<{ access_token: string }>("/auth/login", "POST", { username, password });
    localStorage.setItem("token", result.access_token);
    return result.access_token;
  },
  logout: () => localStorage.removeItem("token"),
  getToken: () => localStorage.getItem("token"),
};
