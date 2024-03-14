import { redirect } from "next/navigation"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import { cookies } from "next/headers"
import { CreateAppointment } from "../api/createAppointment"

export default async function Success({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  if (!searchParams.session_id) {
    redirect("/")
  }

  const sessionStripeId = searchParams.session_id.replace(/\?/g, "")

  const sessionStripe = await stripe.checkout.sessions.retrieve(
    sessionStripeId,
    {
      expand: ["line_items", "line_items.data.price.product"],
    },
  )

  const ConfirmedServicesForAppointment = sessionStripe.line_items?.data.map(
    (services) => {
      const service = services.price?.product as Stripe.Product
      return service.id
    },
  )

  const dateForAppointment = new Date(String(cookies().get("@VaBeauty:date")))

  await CreateAppointment({
    servicesIds: ConfirmedServicesForAppointment,
    date: dateForAppointment,
  })

  return (
    <div>
      <h1>Success</h1>
    </div>
  )
}
