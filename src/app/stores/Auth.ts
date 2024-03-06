/* eslint-disable camelcase */
import create from "zustand"
import { setCookie, destroyCookie } from "nookies"

interface AuthState {
  token: string
  isAuthenticated: boolean
  authError: string | null // Adicionando um campo para armazenar erros
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthActions {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
}

type AuthStore = AuthState & AuthActions

const useAuthStore = create<AuthStore>((set) => ({
  token: "",
  isAuthenticated: false,
  authError: null,

  signIn: async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3333/sessions", {
        method: "POST",
        headers: addTokenToHeaders({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Erro ao fazer login")
      }

      const { access_token } = await response.json()

      // Salvando o token nos cookies usando nookies
      setCookie(null, "@VaBeauty:token", access_token, {
        maxAge: 30 * 24 * 60 * 60, // 30 dias de validade
        path: "/", // Define o caminho do cookie (raiz do site)
      })

      set({ token: access_token, isAuthenticated: true, authError: null })
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      set({
        authError:
          "Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.",
      })
      throw error
    }
  },

  signOut: () => {
    // Removendo o token dos cookies
    destroyCookie(null, "@VaBeauty:token")

    set({ token: "", isAuthenticated: false, authError: null })
  },
}))

const getToken = () => useAuthStore.getState().token

// Função para adicionar o token aos headers da solicitação
export const addTokenToHeaders = (headers: HeadersInit) => {
  const token = getToken()
  if (token) {
    return { ...headers, Authorization: `Bearer ${token}` }
  }
  return headers
}

export default useAuthStore
