import Link from "next/link"
import { FetchServices } from "../fetch-services"
import { ServiceCard } from "./components/service-card"
import { MotionElement } from "@/lib/framer-motion"
import { Suspense } from "react"
import { BreadcrumbService } from "@/app/[services]/breabcrumb-service"

interface ServiceProps {
  category: string
}

export async function ServicesContainer({ category }: ServiceProps) {
  const response = await FetchServices()

  const { services } = response

  const serviceByCategory = services
    .filter((service) => {
      return service.category === category
    })
    .sort((a, b) => Number(a.order) - Number(b.order))

  return (
    <Suspense fallback={<p>Loading</p>}>
      <div className="mx-auto mt-6 px-[1rem] lg:mt-10 lg:max-w-[1216px]   lg:px-[0] xl:max-w-[1256px]">
        <BreadcrumbService />
      </div>
      <div className="mt-[1.5rem] flex h-full w-full flex-col items-center gap-6 px-[1rem] pb-10 sm:mx-auto sm:max-w-[600px] lg:mx-auto lg:mt-[5rem] lg:max-w-[1216px] lg:px-[0] lg:pb-10  xl:max-w-[1256px]">
        {serviceByCategory.map((service) => {
          return (
            <>
              <Link href={`${service.category}/${service.id}`} key={service.id}>
                <MotionElement y={40}>
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    duration={service.duration}
                    price={service.price}
                  ></ServiceCard>
                </MotionElement>
              </Link>
            </>
          )
        })}
      </div>
    </Suspense>
  )
}
