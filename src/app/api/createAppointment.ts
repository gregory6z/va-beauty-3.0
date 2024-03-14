"use server"

import { authHeaders } from "./../../utils/authHeaders"

interface Appointment {
  date: Date
  servicesIds: string[] | undefined
}

export async function CreateAppointment({ date, servicesIds }: Appointment) {
  await fetch("http://localhost:3333/appointments", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders,
    },
    body: JSON.stringify({ date, servicesIds }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}
