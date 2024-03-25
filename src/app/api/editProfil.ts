/* eslint-disable camelcase */
"use server"

import { cookies } from "next/headers"

const token = cookies().get("@VaBeauty:token")?.value

interface ProfilProps {
  name?: string
  email?: string
  password?: string
  telephone?: string
}

export async function EditProfil({
  name,
  email,
  password,
  telephone,
}: ProfilProps) {
  const dataToSend: ProfilProps = {}

  if (name) {
    dataToSend.name = name
  }

  if (email) {
    dataToSend.email = email
  }

  if (password) {
    dataToSend.password = password
  }

  if (telephone) {
    dataToSend.telephone = telephone
  }

  const response = await fetch("http://localhost:3333/client", {
    method: "PUT",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataToSend),
  })

  if (!response.ok) {
    return {
      message: "Erro durante a criação do agendamento.",
    }
  }

  const { accessToken } = await response.json()

  if (!(password && !name && !email && !telephone)) {
    cookies().set("@VaBeauty:token", String(accessToken), {
      httpOnly: true,
    })
  }
}
