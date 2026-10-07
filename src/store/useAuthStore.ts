import { MeApiDataSchema } from '@/features/auth/api/authApiSchema';
import { create } from 'zustand';

interface AuthState {
  user: MeApiDataSchema | null;
  isAuthenticated: boolean;
  setUser: (user: MeApiDataSchema | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
