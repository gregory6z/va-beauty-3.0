"use server"

import { cookies } from "next/headers"

import { stripe } from "@/lib/stripe"
import { Stripe } from "stripe"

interface SubscriptionStatus {
  status: Stripe.Subscription.Status
  product: Stripe.Product
  id: string
}

export async function FetchSubscriptions(): Promise<SubscriptionStatus[]> {
  const sessionCookie = cookies().get("@VaBeauty:session")?.value

  const session = sessionCookie ? JSON.parse(sessionCookie) : null

  if (!session.customerId) {
    return []
  }

  const subscriptions = await stripe.subscriptions.list({
    customer: session.customerId,
  })

  const subscriptionStatuses: SubscriptionStatus[] = await Promise.all(
    subscriptions.data.map(async (subscription) => {
      const productId = subscription.items.data[0].price.product
      const product = await stripe.products.retrieve(productId as string)
      return {
        id: subscription.id,
        status: subscription.status,
        product,
      }
    }),
  )

  return subscriptionStatuses
}
