"use server"

import { stripe } from "@/lib/stripe"
import { cookies } from "next/headers"

const token = cookies().get("@VaBeauty:token")?.value
interface unSubscribeProps {
  subscriptionId: string
  stripeId: string
}

export async function unSubscribe({
  subscriptionId,
  stripeId,
}: unSubscribeProps) {
  "use server"
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  if (subscription.status !== "active") {
    return {
      message: "erro ao cancelar a inscrição.",
    }
  }

  await stripe.subscriptions.cancel(subscriptionId)

  const response = await fetch("http://localhost:3333/delete-subscription", {
    method: "DELETE",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      stripeId,
    }),
  })

  if (!response.ok) {
    return {
      message: "Erro durante a criação do agendamento.",
    }
  }
}
