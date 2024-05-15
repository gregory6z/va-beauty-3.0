/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
"use server"

import { parseCookies } from "nookies"
import { ZodError, z } from "zod"

const signOutSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Les mots de passe ne correspondent pas",
    path: ["passwordConfirmation"],
  })

export async function action(prevState: any, formData: FormData) {
  try {
    const data = signOutSchema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    })
    // Se não houver erros, o código continua aqui

    // Coloque o código que você deseja executar com os dados aqui
    // Por exemplo, enviar os dados para o servidor
    const response = await fetch(`${process.env.API_URL}/accounts`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const responseData = await response.json() // Extrair os dados da resposta JSON
      if (responseData.error) {
        return {
          message: String(responseData.message),
        }
      } else {
        return {
          message:
            "Erreur lors de la création du compte. Veuillez réessayer plus tard.",
        }
      }
    }

    // pegue dados dos cookies do carrinho
    const cookies = parseCookies()
    const cartItems = cookies.cartItems

    return {
      success: true,
      email: data.email,
    }
    // Redirecionar para a página inicial após o login
  } catch (error: any) {
    // Se ocorrer um erro durante a validação Zod, capturamos e lidamos com ele aqui
    if (error instanceof ZodError) {
      // Se for um erro de validação do Zod, retornamos a mensagem de erro
      return {
        message: error.errors[0]?.message || "Erro de validação do Zod.",
      }
    } else {
      return {
        message:
          "Erreur lors de la création du compte. Veuillez réessayer plus tard.",
      }
    }
  }
}
