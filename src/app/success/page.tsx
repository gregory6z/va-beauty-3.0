import { redirect } from "next/navigation"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { cookies } from "next/headers"
import { CreateAppointment } from "../api/createAppointment"
import { CalendarHeart } from "lucide-react"
import { ToastSuccess } from "./toastSucces"
import Link from "next/link"

import { utcToZonedTime, format } from "date-fns-tz"
import { fr } from "date-fns/locale"

export default async function Success({
  searchParams,
}: {
  searchParams: { session_id: string }
}) {
  if (!searchParams.session_id) {
    redirect("/")
  }

  const isProduction = process.env.NODE_ENV === "production"

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

  const ConfirmedServices = sessionStripe.line_items?.data.map((services) => {
    const service = services.price?.product as Stripe.Product
    return service
  })

  const dateForAppointment = cookies().get("@VaBeauty:date")?.value

  const dateInUTC = new Date(String(dateForAppointment)).toISOString()

  const timeZone = "Europe/Paris"

  const zonedDate = utcToZonedTime(dateInUTC, timeZone)

  const formattedDate = format(zonedDate, "eeee, d MMMM yyyy HH:mm", {
    locale: fr,
  })

  // const formattedDate = dayjs(dateForAppointment)
  //   .locale("fr")
  //   .format("dddd, D MMMM YYYY HH:mm")

  await CreateAppointment({
    servicesIds: ConfirmedServicesForAppointment,
    date: new Date(zonedDate),
  })

  // remover cookies de agendamento

  return (
    <>
      <ToastSuccess />
      <div className=" flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center bg-white px-[1.5rem] lg:min-h-[calc(100vh-6rem)] lg:justify-normal lg:px-0 lg:pt-[8rem]">
        <CalendarHeart strokeWidth={1.25} className="h-32 w-32"></CalendarHeart>
        <h1 className="mt-4  text-5xl tracking-tighter">
          Merci pour votre confiance
        </h1>

        <p className="mt-4 text-zinc-900/60 lg:text-xl">
          Nous sommes ravis de vous accueillir pour votre rendez-vous!
        </p>
        <div className="mt-10 lg:text-lg ">
          <p className="text-zinc-900/60">
            Votre rendez-vous a été confirmé pour le
          </p>
          <p className="text-semibold text-xl lg:text-2xl">{formattedDate}</p>
          <div className="mt-4 flex flex-col">
            <p className="text-zinc-900/60">services:</p>
            {ConfirmedServices?.map((service) => (
              <div key={service.id}>
                <p className="text-xl lg:text-2xl">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-24 text-pretty text-sm text-zinc-900/60">
          Vous pouvez modifier la date du rendez-vous jusqu'à 24 heures avant la
          date dans votre{" "}
          <Link className="underline hover:text-zinc-700" href={"/account"}>
            Espace Client
          </Link>
        </p>
      </div>
    </>
  )
}
