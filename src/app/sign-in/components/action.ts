/* eslint-disable camelcase */
"use server"

import { useAuthStore } from "@/app/stores/Auth"
import { cookies } from "next/headers"

export async function action(data: FormData): Promise<void> {
  const email = data.get("email")
  const password = data.get("password")

  try {
    const response = await fetch("http://localhost:3333/sessions", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      // Tratar erro de resposta não bem sucedida
      throw new Error(`Erro ao fazer login: ${response.statusText}`)
    }

    const { access_token } = await response.json()

    // Salvar token no estado global
    useAuthStore.getState().saveToken(access_token)

    // Salvar token nos cookies
    cookies().set("@VaBeauty:token", String(access_token))

    useAuthStore.getState().setIsAuthenticated(true)

    // Redirecionar para a página inicial após o login
  } catch (error) {
    console.error("Erro ao fazer login:", error)
    // Tratar erro de requisição
    // Por exemplo, você pode definir um erro no estado global
    useAuthStore
      .getState()
      .saveError("Erro ao fazer login. Por favor, tente novamente.")
  }
}
