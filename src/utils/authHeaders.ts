import { cookies } from "next/headers"

function getAuthHeaders() {
  const token = cookies().get("@VaBeauty:token")?.value

  const headers = {
    Authorization: `Bearer ${token}`,
  }

  return headers
}

export const authHeaders = getAuthHeaders()

// Salva os headers em uma variável
