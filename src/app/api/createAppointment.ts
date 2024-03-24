"use server"

import { cookies } from "next/headers"

interface Appointment {
  date: Date
  servicesIds: string[] | undefined
}

const token = cookies().get("@VaBeauty:token")?.value

export async function CreateAppointment({ date, servicesIds }: Appointment) {
  const response = await fetch("http://localhost:3333/appointments", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      date,
      servicesIds,
    }),
  })

  if (!response.ok) {
    return {
      message: "Erro durante a criação do agendamento.",
    }
  }
}
