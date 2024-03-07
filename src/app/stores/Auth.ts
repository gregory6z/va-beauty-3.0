import { create } from "zustand"

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  authError: string
}

interface AuthActions {
  saveToken: (token: string) => void // Função para salvar o token no Zustand
  saveError: (error: string) => void // Função para salvar o erro no Zustand
  setIsAuthenticated: (isAuthenticated: boolean) => void // Função para alterar isAuthenticated no Zustand
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  isAuthenticated: false,
  authError: "",

  // Função para salvar o token no Zustand
  saveToken: (token) => {
    set((state) => ({ ...state, token }))
  },

  // Função para salvar o erro no Zustand
  saveError: (error) => {
    set((state) => ({ ...state, authError: error }))
  },

  // Função para alterar isAuthenticated no Zustand
  setIsAuthenticated: (isAuthenticated) => {
    set((state) => ({ ...state, isAuthenticated }))
  },
}))
