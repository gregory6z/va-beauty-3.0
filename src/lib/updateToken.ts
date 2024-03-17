import { useAuthStore } from "@/app/stores/Auth"

// Função para adicionar o token aos cabeçalhos
export function addTokenToHeaders(headers: HeadersInit): HeadersInit {
  const token = useAuthStore.getState().token

  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return headers
}

// Função para fazer a solicitação com os cabeçalhos modificados
export async function fetchWithHeaders(url: string, options?: RequestInit) {
  const modifiedOptions: RequestInit = {
    ...options,
    headers: addTokenToHeaders(options?.headers || {}),
  }

  const response = await fetch(url, modifiedOptions)
  return response
}
