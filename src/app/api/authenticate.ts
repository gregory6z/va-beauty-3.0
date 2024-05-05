"use server"

import { cookies } from "next/headers"

interface ProfilProps {
  email: string
  password: string
}

export async function AuthenticateAccount({ email, password }: ProfilProps) {
  const response = await fetch("http://localhost:3333/sessions", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  if (!response.ok) {
    const responseData = await response.json() // Extrair os dados da resposta JSON
    if (responseData.error) {
      return {
        message: String(responseData.message),
      }
    } else {
      return {
        message: "Erreur de connexion au serveur. ",
      }
    }
  }

  // eslint-disable-next-line camelcase
  const { access_token } = await response.json()

  cookies().set("@VaBeauty:token", String(access_token), {
    httpOnly: true,
  })

  return {
    success: true,
  }
}
