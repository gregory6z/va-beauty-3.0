"use server"

import { cookies } from "next/headers"
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable camelcase */

export interface Appointment {
  id: string
  date: Date
  services: string[]
  duration: number
  clientId: string
  isSubscription?: string
  dateTime: Date
}

const token = cookies().get("@VaBeauty:token")?.value

export async function FetchAppointmentsByClient() {
  const response = await fetch("http://localhost:3333/fetch-appointments", {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    return {
      message: "Erro durante a criação do agendamento.",
    }
  }
  const data = await response.json()

  const { pastAppointments, subscriptions, futureAppointments } = data

  // appointments = appointments.filter(
  //   (appointment: Appointment) =>
  //     appointment.servicesIds && appointment.servicesIds.length > 0,
  // )

  // const { findServiceById } = await FetchServices()

  return {
    pastAppointments,
    subscriptions,
    futureAppointments,
  }
}
