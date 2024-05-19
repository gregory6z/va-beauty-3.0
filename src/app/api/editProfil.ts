/* eslint-disable camelcase */
"use server"

import { cookies } from "next/headers"

interface ProfilProps {
  name?: string
  email?: string
  password?: string
  telephone?: string
  customerId?: string
}

export async function EditProfil({
  name,
  email,
  password,
  telephone,
  customerId,
}: ProfilProps) {
  const dataToSend: ProfilProps = {}
  const token = cookies().get("@VaBeauty:token")?.value

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

  if (customerId) {
    dataToSend.customerId = customerId
  }

  const response = await fetch(`${process.env.API_URL}/client`, {
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

  if (!password && (name || email || telephone || customerId)) {
    cookies().set("@VaBeauty:token", String(accessToken), {
      httpOnly: true,
    })
  }
}
