"use server"

import { cookies } from "next/headers"

import { Service } from "@/app/stores/Services"

import { EditProfil } from "@/app/api/editProfil"
import { stripe } from "@/lib/stripe"
import { redirect } from "next/navigation"

import { jwtDecode } from "jwt-decode"

interface User {
  sub: string
  email: string
  name: string
  customerId: string
  iat: number
}

export async function actionChecout() {
  const cartItemsString = cookies().get("@VaBeauty:cartItems")?.value

  const tokenAuthentication = cookies().get("@VaBeauty:token")?.value

  if (!tokenAuthentication) {
    redirect("/sign-in")
  }
  let user: User | null = null

  if (tokenAuthentication) {
    user = jwtDecode(tokenAuthentication)
  }

  if (cartItemsString) {
    const cartItems = JSON.parse(cartItemsString)

    const hasSubscriptionItem = cartItems.some(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.isSubscription,
    )

    let customerId = user?.customerId

    if (user && !user.customerId) {
      // Crie o cliente aqui
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
      })

      customerId = customer.id

      await EditProfil({ customerId: customer.id })
    }

    if (hasSubscriptionItem) {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer: customerId,
        line_items: cartItems.map((product: Service) => ({
          price: product.defaultPriceId,
          quantity: 1,
        })),

        success_url:
          "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}?",
        cancel_url: "http://localhost:3000/cancel",
      })
      if (session.url) {
        redirect(session.url)
      }
    }
    if (!hasSubscriptionItem) {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer: customerId,
        line_items: cartItems.map((product: Service) => ({
          price: product.defaultPriceId,
          quantity: 1,
        })),

        success_url:
          "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}?",
        cancel_url: "http://localhost:3000/cancel",
      })
      if (session.url) {
        redirect(session.url)
      }
    }
  }
}
