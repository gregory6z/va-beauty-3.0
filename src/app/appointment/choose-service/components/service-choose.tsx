"use client"

// import { Service } from "@/app/components/fetch-services"
// import { addItemsToCartCookies } from "@/app/lib/nookies"
import { useServiceStore } from "@/app/stores/Services"

import { Button } from "./ui/button"
import { Clock, Euro, Plus } from "lucide-react"
import { useEffect, useState } from "react"

import LoadingService from "../loading-service"

interface ServiceChooseProps {
  category: string
}

export function ServiceChoose({ category }: ServiceChooseProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true)
    }, 1000) // 5 segundos

    return () => clearTimeout(timeoutId) // Limpa o timeout na desmontagem
  }, [])

  const { allServices, addToCart, checkIfCartItemAlreadyExists, updateTotals } =
    useServiceStore()

  const services = allServices

  const [currentPage, setCurrentPage] = useState(1)
  const [showAll, setShowAll] = useState(false)
  const servicesPerPage = 5

  const filteredServices = services.filter(
    (service) => service.category === category,
  )
  const totalServices = showAll
    ? filteredServices.length
    : currentPage * servicesPerPage
  const currentServices = filteredServices.slice(0, totalServices)

  const paginate = () => setCurrentPage(currentPage + 1)
  const showLess = () => setShowAll(false)

  return (
    <section className=" rounded-sm  lg:px-0 ">
      <h1 className=" mb-4   ml-6 text-2xl font-semibold capitalize lg:ml-0 lg:px-0">
        {category}
      </h1>
      <div>
        {!isLoaded ? (
          <LoadingService />
        ) : (
          <>
            {currentServices.map((service) => (
              <div
                key={service.id}
                className=" flex animate-fadeIn flex-col justify-between  border-b border-zinc-200 bg-white px-[1.5rem] py-4 shadow-sm transition-all hover:bg-zinc-50 sm:flex-row sm:p-4 lg:flex lg:items-center "
              >
                <div className="">
                  <h2 className=" text-lg font-semibold sm:max-w-none">
                    {service.name}
                  </h2>
                  <p className="flex items-center  gap-3 text-sm text-gray-900/60 ">
                    {service.duration} minutes <Clock width={16}></Clock>
                  </p>
                </div>

                <div className=" flex  items-center justify-between gap-2  lg:gap-3 ">
                  <div className="flex w-[70px]">
                    <p className=" text-2xl ">{service.price}</p>
                    <Euro className=""></Euro>
                  </div>

                  <Button
                    onClick={() => {
                      addToCart(service)
                      updateTotals()

                      // addItemsToCartCookies([service as Service])
                    }}
                    disabled={checkIfCartItemAlreadyExists(service.id)}
                    className=" ml-auto flex gap-2  bg-black px-4 py-1  text-white lg:px-6 lg:py-2"
                  >
                    Sélectionner <Plus width={16}></Plus>
                  </Button>
                </div>
              </div>
            ))}

            {!showAll && filteredServices.length > totalServices && (
              <div className="mt-4 flex justify-center">
                <button
                  className=" bg-black px-6 py-2 text-white"
                  onClick={paginate}
                >
                  Voir plus de services
                </button>
              </div>
            )}
            {showAll && (
              <div className="mt-4 flex justify-center">
                <button
                  className="rounded-lg bg-blue-500 px-4 py-2 text-white"
                  onClick={showLess}
                >
                  Voir moins de services
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
