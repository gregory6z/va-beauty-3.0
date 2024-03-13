import { redirect } from "next/navigation"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"

export default async function Success({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  if (!searchParams.session_id) {
    redirect("/")
  }

  const sessionStripeId = searchParams.session_id.replace(/\?/g, "")

  const session = await stripe.checkout.sessions.retrieve(sessionStripeId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const ConfirmedServicesForAppointment = session.line_items?.data.map(
    (services) => {
      const service = services.price?.product as Stripe.Product
      return service.id
    },
  )

  console.log(ConfirmedServicesForAppointment)

  return (
    <div>
      <h1>Success</h1>
    </div>
  )
}
