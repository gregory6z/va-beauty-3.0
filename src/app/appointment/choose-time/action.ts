"use server"

import { cookies } from "next/headers"

import { Service } from "@/app/stores/Services"
import { stripe } from "@/app/lib/stripe"
import { redirect } from "next/navigation"

export async function actionChecout() {
  const cookieStore = cookies()
  const cartItemsString = cookieStore.get("@VaBeauty:cartItems")?.value

  const tokenAuthentication = cookieStore.get("@VaBeauty:token")?.value

  if (!tokenAuthentication) {
    redirect("/sign-in")
  }

  if (cartItemsString) {
    const cartItems = JSON.parse(cartItemsString)

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
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
