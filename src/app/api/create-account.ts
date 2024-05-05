"use server"

interface ProfilProps {
  name: string
  email: string
  password: string
}

export async function CreateAccount({ name, email, password }: ProfilProps) {
  const response = await fetch("http://localhost:3333/accounts", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
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
  return {
    success: true,
  }
}
