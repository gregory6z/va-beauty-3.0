"use server"

import { cookies } from "next/headers"

interface Appointment {
  date: Date
  servicesIds: string[] | undefined
}

interface AppointmentResponse {
  id: string
  date: Date
  services: string[]
  isSubscription: boolean
  createdAt: Date
  updatedAt: Date | null
}

export async function CreateAppointment({ date, servicesIds }: Appointment) {
  const token = cookies().get("@VaBeauty:token")?.value

  const response = await fetch(`${process.env.API_URL}/appointments`, {
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
      response,
    }
  }
  const appointment: AppointmentResponse = await response.json()
  return appointment
}
