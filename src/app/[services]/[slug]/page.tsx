import { Offers } from "@/app/components/Offers"

import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { FetchServices } from "@/app/components/fetch-services"
import { BreadcrumbService } from "../breabcrumb-service"
import { SheetCart } from "@/app/components/cart-fixed"
import { ButtonAddToCart } from "@/app/components/services-container/components/ButtonAddToCart"
import { notFound } from "next/navigation"
import { markdownServices } from "./markedown-step-by-step"
import { Metadata } from "next"

interface ServiceProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ServiceProps): Promise<Metadata> {
  // read route params

  const { services } = await FetchServices()

  const ServiceItem = services.filter((service) => {
    return service.id === String(params.slug)
  })

  return {
    title: ServiceItem.map((service) => service.name[0])[0],
    description: ServiceItem.map((service) => service.description[0])[0],
  }
}

export default async function Service({ params }: ServiceProps) {
  const { services } = await FetchServices()

  const ServiceItem = services.filter((service) => {
    return service.id === String(params.slug)
  })
  if (ServiceItem.length === 0) {
    notFound()
  }

  const MarkdownText = markdownServices.find(
    (service) => service.id === String(params.slug),
  )

  console.log(MarkdownText?.step)

  return (
    <div className="h-full min-h-screen w-full bg-white">
      <SheetCart />
      <div className="mx-auto px-[1.5rem] pt-8  lg:max-w-[900px] lg:px-0 lg:pt-12">
        <BreadcrumbService />
      </div>
      <header className="mx-auto flex h-full max-w-[900px] flex-col px-[1.5rem] pt-10 lg:flex-row lg:gap-10 lg:px-0 ">
        <div className=" h-[250px] lg:h-[450px] lg:w-[450px]">
          {ServiceItem.map((service) => {
            return (
              <Image
                key={service.id}
                className=" h-full w-full object-cover"
                src={service.imageUrl}
                width={450}
                height={450}
                alt={"image de service " + service.name}
              ></Image>
            )
          })}
        </div>

        <main className=" flex h-full flex-col justify-between lg:min-h-[450px]">
          {ServiceItem.map((service) => {
            return (
              <div
                key={service.id}
                className="flex h-full flex-col lg:min-h-[450px] lg:justify-evenly "
              >
                <h1 className="mt-4 text-2xl lg:mt-0 lg:text-4xl">
                  {service.name}
                </h1>
                <p className="lg:mt-2 lg:text-xl">
                  Duration {service.duration} minutes
                </p>
                <div className=" 0 my-4 flex h-full flex-col justify-center lg:my-0 lg:max-w-[300px]">
                  <p className="my-4 text-4xl lg:my-12 lg:text-6xl">
                    € {service.price},00
                  </p>

                  <ButtonAddToCart service={service} />
                </div>
              </div>
            )
          })}
        </main>
      </header>
      <div className="mx-auto mt-20 flex flex-col gap-4 px-[1.5rem] lg:max-w-[900px] lg:px-0">
        <h1 className="text-3xl ">Description</h1>
        {ServiceItem.map((service) => {
          return (
            <p key={service.id} className="lg:text-xl">
              {service.description}
            </p>
          )
        })}
      </div>

      <article className="mx-auto mb-20 mt-10 flex flex-col gap-4 px-[1.5rem] lg:max-w-[750px] lg:px-0">
        {MarkdownText && <h1 className="text-2xl">Pas à pas :</h1>}
        <ReactMarkdown
          components={{
            h2: ({ ...props }) => (
              <h1 className="text-lg font-semibold" {...props} />
            ),
          }}
        >
          {MarkdownText?.step}
        </ReactMarkdown>
      </article>

      <Offers></Offers>
    </div>
  )
}
