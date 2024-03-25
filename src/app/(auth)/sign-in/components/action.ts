/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
"use server"

import { cookies } from "next/headers"

import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function action(formData: FormData) {
  const data = schema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  try {
    const response = await fetch("http://localhost:3333/sessions", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return {
        message: "Nom d'utilisateur ou mot de passe invalide.",
      }
    }

    const { access_token } = await response.json()

    cookies().set("@VaBeauty:token", String(access_token), {
      httpOnly: true,
    })

    return {
      success: true,
    }
  } catch (error: any) {
    return {
      message: "Erreur de connexion au serveur. ",
    }
  }
}
