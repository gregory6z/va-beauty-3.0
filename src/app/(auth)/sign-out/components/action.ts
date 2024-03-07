/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
"use server"

import { signOutSchema } from "./sign-out-form"

export async function action(prevState: any, formData: FormData) {
  const data = signOutSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  console.log(data)

  return {
    message: "ola",
  }

  // try {
  //   const response = await fetch("http://localhost:3333/accounts", {
  //     method: "POST",
  //     cache: "no-store",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })

  //   if (!response.ok) {
  //     return {
  //       message: "Nom d'utilisateur ou mot de passe invalide.",
  //     }
  //   }

  //   return {
  //     success: true,
  //   }

  //   // Redirecionar para a página inicial após o login
  // } catch (error: any) {
  //   return {
  //     message: "Erreur de connexion au serveur. ",
  //   }
  // }
}
