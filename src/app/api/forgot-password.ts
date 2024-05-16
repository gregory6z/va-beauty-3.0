"use server"

interface ForgotPasswordProps {
  email: string
}

export async function ForgotPassword({ email }: ForgotPasswordProps) {
  const response = await fetch(`${process.env.API_URL}/forgot-password`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
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

  return {
    success: true,
  }
}
