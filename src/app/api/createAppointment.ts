"use server"

interface Appointment {
  date: Date
  servicesIds: string[] | undefined
}

export async function CreateAppointment({ date, servicesIds }: Appointment) {
  const response = await fetch("http://localhost:3333/appointments", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzQ2OWQ1Ni1lZjA3LTQ2MzYtOWEwOS04YWEwNDY3MWYzM2YiLCJpYXQiOjE3MTA0NTE5MjJ9.Yon4ruZ8CZuY5CbPcPkzQwE_uxVhWMiuAgY1SpCP_Y8uKd1HqSESt9tKV-7eSOaI4KZyPu97136Ede1srp9dU6s3BXD0zCmejuZVRlzEgA-ZW1weL4wMJjFNaWCQlPZPscRs1A_Adwe_mkGE2WDMT7F2VNgelBLuUQ8o-39wV8PUtEjfFqkfTfN83QBecU9qkzIyGyfwQG-2fJAxLm4s5wkz_Rd9SI5WKixq24F9Ls76EONyKUcEVOk8cDjk3peUtQYejcg7VvuTb0jQdxBIqPTYPUhckOHXWw1SZMcQkcFXB6Y6qWb7MQRv-BvlHYvNldy6IS2auM_-BAuvn0yvlQ`,
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
