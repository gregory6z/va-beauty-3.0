import { FetchServices } from "@/app/components/fetch-services"
import { OfferCard } from "./OfferCard"
import Link from "next/link"
import { MotionCascade, MotionElement } from "@/lib/framer-motion"

export async function Offers() {
  const allServices = await FetchServices()

  const { promotion } = allServices

  return (
    <main className="flex h-full w-full bg-zinc-50 lg:min-h-screen  ">
      <div className=" my-[5rem] flex h-full w-full flex-col px-[1.5rem]  lg:my-[7rem] lg:max-w-[1216] lg:px-[4rem] xl:mx-auto   xl:max-w-[1256px] xl:px-[0]">
        <MotionElement>
          <h1 className=" text-2xl font-bold	tracking-tight sm:text-3xl lg:text-4xl ">
            Offres irrésistibles
          </h1>
        </MotionElement>

        <MotionCascade className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-[4rem] lg:grid-cols-4">
          {promotion.map((promotion) => {
            return (
              <Link
                key={promotion.id}
                href={`/${promotion.category}/${promotion.id}/#`}
              >
                <OfferCard
                  image={promotion.imageUrl}
                  name={promotion.name}
                  key={promotion.id}
                  price={promotion.price}
                ></OfferCard>
              </Link>
            )
          })}
        </MotionCascade>
      </div>
    </main>
  )
}
