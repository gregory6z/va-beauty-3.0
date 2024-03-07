import { parseCookies } from "nookies"

// Função para recuperar o dado de um cookie
export function getItemFromCookie(key: string) {
  const cookies = parseCookies()
  return cookies[key]
}
