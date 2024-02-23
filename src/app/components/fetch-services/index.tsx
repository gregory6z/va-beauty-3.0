import { stripe } from "@/app/lib/stripe"
import Stripe from "stripe"

type Service = {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  numberPrice: number
  defaultPriceId: string
  category: string
  duration: string
  order: string
}

type AllServiceProps = {
  services: Service[]
  sourcils: Service[]
  levres: Service[]
  forfaits: Service[]
}

export async function AllServices(): Promise<AllServiceProps> {
  const ServicesList = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
  })

  const services = ServicesList.data.map((service) => {
    const price = service.default_price as Stripe.Price

    return {
      id: service.id as string,
      name: service.name as string,
      description: service.description as string,
      imageUrl: service.images[0] as string,
      price: (price.unit_amount as number) / 100,
      numberPrice: (price.unit_amount as number) / 100,
      defaultPriceId: price.id as string,
      category: String(service.metadata.category),
      duration: String(service.metadata.duration),
      order: String(service.metadata.order),
    }
  })

  const sourcils = services
    .filter((service) => {
      return service.category === "sourcils"
    })
    .sort((a, b) => Number(a.order) - Number(b.order))

  const levres = services
    .filter((service) => {
      return service.category === "levres"
    })
    .sort((a, b) => Number(a.order) - Number(b.order))

  const forfaits = services
    .filter((service) => {
      return service.category === "forfaits"
    })
    .sort((a, b) => Number(a.order) - Number(b.order))

  const promotion = services.filter((service) => {
    return (
      service.name === "Hydra Lips Gloss" && service.name === "Hydra Lips Gloss"
    )
  })

  return { services, sourcils, levres, forfaits }
}
