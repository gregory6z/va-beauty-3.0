"use client"

// import { Service } from "@/app/components/fetch-services"
// import { addItemsToCartCookies } from "@/app/lib/nookies"
import { useServiceStore } from "@/app/stores/Services"
import { useState } from "react"
import { Button } from "./ui/button"

interface ServiceChooseProps {
  category: string
}

export function ServiceChoose({ category }: ServiceChooseProps) {
  // const response = allServices.filter((service) => service.id === id)

  // addCart(response[0])

  const { allServices, addToCart, checkIfCartItemAlreadyExists } =
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
    <div className=" lg:px-0">
      <p className=" mb-4  ml-6 text-2xl font-semibold lg:ml-0 lg:px-0">
        {category}
      </p>
      {currentServices.map((service) => (
        <div
          key={service.id}
          className=" flex flex-col justify-between  border-b border-zinc-200 bg-white px-[1.5rem] py-4 shadow-sm sm:flex-row sm:p-4 lg:flex lg:items-center "
        >
          <div>
            <p className=" max-w-[230px] sm:max-w-none">{service.name}</p>
          </div>
          <div className=" flex  items-center justify-between gap-2  lg:gap-3 ">
            <p className="text-sm">{service.duration}</p>
            <p className="text-sm">{service.price} $</p>
            <Button
              onClick={() => {
                addToCart(service)

                // addItemsToCartCookies([service as Service])
              }}
              disabled={checkIfCartItemAlreadyExists(service.id)}
              className=" ml-auto bg-black px-4 py-1  text-white lg:px-6 lg:py-2"
            >
              Choisir
            </Button>
          </div>
        </div>
      ))}
      {!showAll && filteredServices.length > totalServices && (
        <div className="mt-4 flex justify-center">
          <button className=" bg-black px-6 py-2 text-white" onClick={paginate}>
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
    </div>
  )
}
