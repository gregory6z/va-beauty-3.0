"use server"

import { cookies } from "next/headers"

import { Service } from "@/app/stores/Services"
import { stripe } from "@/lib/stripe"
import { redirect } from "next/navigation"

import { jwtDecode } from "jwt-decode"

interface User {
  sub: string
  email: string
  name: string
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

    const customer = await stripe.customers.create({
      name: user?.name,
      email: user?.email,
    })

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customer.id,
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
