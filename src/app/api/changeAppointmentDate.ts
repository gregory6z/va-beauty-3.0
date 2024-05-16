"use server"

import { cookies } from "next/headers"

const token = cookies().get("@VaBeauty:token")?.value

interface Appointment {
  date: Date
  appointmentId: string
}

export async function ChangeDateAppointment({
  date,
  appointmentId,
}: Appointment) {
  const response = await fetch(`${process.env.API_URL}/edit-appointment`, {
    method: "PUT",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      date: date.toISOString(),
      appointmentId,
    }),
  })

  if (!response.ok) {
    return {
      message: "Erro durante a criação do agendamento.",
    }
  }
}
