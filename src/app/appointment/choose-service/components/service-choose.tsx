"use client"

import { useState } from "react"

interface ServiceChooseProps {
  category: "Forfait" | "Sourcils" | "Lévres"
}

interface Service {
  name: string
  category: "Forfait" | "Sourcils" | "Lévres"
  price: number
  duration: string
}

const services: Service[] = [
  {
    name: "Corte de Cabelo",
    category: "Forfait",
    price: 25,
    duration: "40min",
  },
  {
    name: "Coloração de Cabelo",
    category: "Forfait",
    price: 30,
    duration: "50min",
  },
  {
    name: "Escova Progressiva",
    category: "Forfait",
    price: 40,
    duration: "60min",
  },
  {
    name: "Tratamento Facial",
    category: "Forfait",
    price: 35,
    duration: "45min",
  },
  {
    name: "Design de Sobrancelhas",
    category: "Sourcils",
    price: 20,
    duration: "30min",
  },
  {
    name: "Micropigmentação de Sobrancelhas",
    category: "Sourcils",
    price: 50,
    duration: "60min",
  },
  {
    name: "Depilação de Sobrancelhas",
    category: "Sourcils",
    price: 15,
    duration: "20min",
  },
  {
    name: "Preenchimento Labial",
    category: "Lévres",
    price: 30,
    duration: "30min",
  },
  { name: "Contorno Labial", category: "Lévres", price: 25, duration: "30min" },
  {
    name: "Hidratação Labial",
    category: "Lévres",
    price: 20,
    duration: "20min",
  },
  { name: "Manicure", category: "Forfait", price: 20, duration: "30min" },
  { name: "Pedicure", category: "Forfait", price: 25, duration: "45min" },
  { name: "Unhas de Gel", category: "Forfait", price: 40, duration: "60min" },
  {
    name: "Massagem Relaxante",
    category: "Forfait",
    price: 45,
    duration: "60min",
  },
  {
    name: "Massagem Terapêutica",
    category: "Forfait",
    price: 50,
    duration: "75min",
  },
  {
    name: "Drenagem Linfática",
    category: "Forfait",
    price: 55,
    duration: "60min",
  },
  {
    name: "Limpeza de Pele",
    category: "Forfait",
    price: 30,
    duration: "45min",
  },
  { name: "Peeling Facial", category: "Forfait", price: 40, duration: "60min" },
  {
    name: "Alongamento de Cílios",
    category: "Sourcils",
    price: 35,
    duration: "60min",
  },
  {
    name: "Permanente de Cílios",
    category: "Sourcils",
    price: 30,
    duration: "45min",
  },
  {
    name: "Tintura de Cílios",
    category: "Sourcils",
    price: 20,
    duration: "30min",
  },
  { name: "Microblading", category: "Sourcils", price: 60, duration: "90min" },
  {
    name: "Depilação Facial",
    category: "Sourcils",
    price: 15,
    duration: "20min",
  },
  {
    name: "Design de Barba",
    category: "Forfait",
    price: 300,
    duration: "30min",
  },
  { name: "Barboterapia", category: "Forfait", price: 35, duration: "45min" },
  { name: "Corte de Barba", category: "Forfait", price: 20, duration: "30min" },
  {
    name: "Coloração de Barba",
    category: "Forfait",
    price: 25,
    duration: "45min",
  },
  {
    name: "Tratamento Capilar",
    category: "Forfait",
    price: 30,
    duration: "45min",
  },
  {
    name: "Tratamento Capilar de gregory praxedes martins",
    category: "Forfait",
    price: 30,
    duration: "45min",
  },
  {
    name: "Maquiagem Profissional",
    category: "Forfait",
    price: 40,
    duration: "60min",
  },
]

export function ServiceChoose({ category }: ServiceChooseProps) {
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
    <div className="px-[1.5rem] lg:px-0">
      <p className="mb-4  text-2xl font-semibold">{category}</p>
      {currentServices.map((service) => (
        <div
          key={service.name}
          className=" flex flex-col justify-between gap-1 border-b border-neutral-200 bg-white p-3 shadow-sm sm:flex-row sm:p-4 lg:flex lg:items-center"
        >
          <div>
            <p className=" max-w-[230px] sm:max-w-none">{service.name}</p>
          </div>
          <div className=" flex  items-center justify-between gap-2  lg:gap-3 ">
            <p className="text-sm">{service.duration}</p>
            <p className="text-sm">{service.price} $</p>
            <button className=" ml-auto bg-black px-4 py-1  text-white lg:px-6 lg:py-2">
              Choisir
            </button>
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
