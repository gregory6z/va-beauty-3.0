import { FetchServices } from "../fetch-services"
import { ServiceCard } from "./components/service-card"
import { MotionElement } from "@/lib/framer-motion"
import { Suspense } from "react"
import { BreadcrumbService } from "@/app/[services]/breabcrumb-service"
import { Service } from "@/app/stores/Services"

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
      <div className="mx-auto mt-6 px-[1rem] lg:mt-10 lg:max-w-[1080px]   lg:px-[0] xl:max-w-[1080px]">
        <BreadcrumbService />
      </div>
      <article className="mx-auto flex max-w-[1080px] flex-col gap-4 px-[1.5rem] pb-6 pt-12 lg:flex-row lg:gap-10 lg:px-0">
        <h1 className="text-pretty font-bold lg:max-w-[800px]   lg:text-2xl">
          {/* Nous traitons vos sourcils avec une responsabilité et une expertise
          extrêmes, garantissant des résultats impeccables qui mettent en valeur
          la beauté naturelle de votre regard. */}
          Nous traitons vos services esthétiques avec une responsabilité et une
          expertise extrêmes, garantissant des résultats impeccables qui mettent
          en valeur la beauté naturelle de votre visage.
        </h1>
        <p className="max-w-[400px] text-balance lg:text-right">
          {/* Notre service est unique, utilisant des techniques brésiliennes
          exclusives pour offrir les meilleurs soins possibles à vos sourcils. */}
          Notre service est unique, utilisant des techniques brésiliennes
          exclusives pour offrir les meilleurs soins possibles à vos besoins
          esthétiques.
        </p>
      </article>

      <p className=" mx-auto max-w-[980px] text-balance px-[1.5rem] text-sm text-gray-900/60 lg:px-0 lg:text-center lg:text-base">
        {/* Nous proposons une gamme de services intégrés en un seul, que aucun
        autre salon ne propose, et tout cela à partir de seulement 22 euros. */}
        Nous proposons une gamme de services intégrés en un seul, que aucun
        autre salon ne propose, et tout cela à partir de seulement{" "}
        <span className="font-bold">20 euros.</span>
      </p>

      <main className="mt-[2rem] flex h-full w-full flex-col items-center gap-6 px-[1rem] pb-10 sm:mx-auto sm:max-w-[600px] lg:mx-auto lg:mt-[3rem] lg:max-w-[1216px] lg:px-[0] lg:pb-[8rem] xl:max-w-[1256px]">
        {serviceByCategory.map((service) => {
          return (
            <>
              {/* <Link href={`${service.category}/${service.id}`} key={service.id}> */}

              <MotionElement y={40} key={service.id}>
                <ServiceCard
                  service={service as Service}
                  name={service.name}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  duration={service.duration}
                  price={service.price}
                ></ServiceCard>
              </MotionElement>
              {/* </Link> */}
            </>
          )
        })}
      </main>
    </Suspense>
  )
}
