import { create } from "zustand"

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  authError: string | null
}

interface AuthActions {
  saveToken: (token: string) => void // Função para salvar o token no Zustand
  saveError: (error: string | null) => void // Função para salvar o erro no Zustand
}

type AuthStore = AuthState & AuthActions

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  isAuthenticated: false,
  authError: null,

  // Função para salvar o token no Zustand
  saveToken: (token) => {
    set((state) => ({ ...state, token }))
  },

  // Função para salvar o erro no Zustand
  saveError: (error) => {
    set((state) => ({ ...state, authError: error }))
  },
}))

export const addTokenToHeaders = (
  headers: HeadersInit,
  token: string | null,
) => {
  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return headers
}

export default useAuthStore
