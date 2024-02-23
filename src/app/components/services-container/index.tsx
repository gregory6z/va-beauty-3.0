import Link from "next/link"
import { AllServices } from "../fetch-services"
import { ServiceCard } from "./components/service-card"

interface ServiceProps {
  category: string
}

export async function ServicesContainer({ category }: ServiceProps) {
  const allServices = await AllServices()

  const { services } = allServices

  const serviceByCategory = services
    .filter((service) => {
      return service.category === category
    })
    .sort((a, b) => Number(a.order) - Number(b.order))

  return (
    <>
      <div className="flex h-full w-full flex-col gap-6 px-[1rem] pb-10 sm:mx-auto sm:max-w-[600px] lg:mx-auto lg:max-w-[1216px] lg:px-[0] lg:pb-10  xl:max-w-[1256px]">
        {serviceByCategory.map((service) => {
          return (
            <Link href={`${service.category}/${service.id}`} key={service.id}>
              <ServiceCard
                name={service.name}
                description={service.description}
                imageUrl={service.imageUrl}
                duration={service.duration}
                price={service.price}
              ></ServiceCard>
            </Link>
          )
        })}
      </div>
    </>
  )
}
