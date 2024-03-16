/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { parseCookies, setCookie, destroyCookie } from "nookies"

export interface Service {
  id: string
  name: string
  description?: string
  imageUrl: string
  price: number
  numberPrice: number
  defaultPriceId: string
  category: string
  duration: string
  order: string
}

export type ServiceState = {
  services: Service[]
  allServices: Service[]
  totalDuration: number
  totalPrice: number
}

export type ServiceActions = {
  addToCart: (service: Service) => void
  removeFromCart: (serviceId: string) => void
  clearCart: () => void
  updateAllServices: (services: Service[]) => void
  checkIfCartItemAlreadyExists: (serviceId: string) => boolean
  updateTotals: () => void
}

export type ServiceStore = ServiceState & ServiceActions

// Função auxiliar para atualizar os cookies
const updateCookies = (
  services: Service[],
  totalDuration: number,
  totalPrice: number,
) => {
  setCookie(undefined, "@VaBeauty:cartItems", JSON.stringify(services), {
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: "/",
  })

  setCookie(undefined, "@VaBeauty:totalDuration", totalDuration.toString(), {
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: "/",
  })

  setCookie(undefined, "@VaBeauty:totalPrice", totalPrice.toString(), {
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: "/",
  })
}

// Função auxiliar para obter itens do carrinho dos cookies
const getCartItemsAndTotalsFromCookies = (): {
  services: Service[]
  totalDuration: number
  totalPrice: number
} => {
  const cookies = parseCookies()
  const services = cookies["@VaBeauty:cartItems"]
    ? JSON.parse(cookies["@VaBeauty:cartItems"])
    : []
  const totalDuration = cookies["@VaBeauty:totalDuration"]
    ? Number(cookies["@VaBeauty:totalDuration"])
    : 0
  const totalPrice = cookies["@VaBeauty:totalPrice"]
    ? Number(cookies["@VaBeauty:totalPrice"])
    : 0

  return { services, totalDuration, totalPrice }
}

export const useServiceStore = create<ServiceStore>((set, get) => ({
  services: getCartItemsAndTotalsFromCookies().services, // Inicialize os serviços com os itens do carrinho dos cookies
  allServices: [],
  totalDuration: getCartItemsAndTotalsFromCookies().totalDuration,
  totalPrice: getCartItemsAndTotalsFromCookies().totalPrice,
  addToCart: (service) =>
    set((state) => {
      const isServiceInCart = state.services.some(
        (item) => item.id === service.id,
      )
      if (!isServiceInCart) {
        const newServices = [...state.services, service]
        const newTotalDuration = state.totalDuration + service.duration
        const newTotalPrice = state.totalPrice + service.price
        updateCookies(newServices, Number(newTotalDuration), newTotalPrice) // Atualize os cookies
        return { ...state, services: newServices }
      } else {
        return state
      }
    }),

  removeFromCart: (serviceId) =>
    set((state) => {
      const newServices = state.services.filter(
        (service) => service.id !== serviceId,
      )
      const newTotalDuration = newServices.reduce(
        (total, service) => total + Number(service.duration),
        0,
      )
      const newTotalPrice = newServices.reduce(
        (total, service) => total + service.price,
        0,
      )
      updateCookies(newServices, newTotalDuration, newTotalPrice) // Atualize os cookies
      return {
        ...state,
        services: newServices,
        totalDuration: newTotalDuration,
        totalPrice: newTotalPrice,
      }
    }),

  clearCart: () => {
    destroyCookie(null, "@VaBeauty:cartItems", {
      path: "/", // Define o caminho do cookie (raiz do site)
    })
    set({ services: [] })
  },

  updateAllServices: (services) =>
    set((state) => ({
      allServices: services, // Atualize allServices com os serviços recebidos
    })),

  checkIfCartItemAlreadyExists: (serviceId) => {
    return get().services.some((service) => service.id === serviceId)
  },
  updateTotals: () => {
    let totalDuration = 0
    let totalPrice = 0

    for (const item of get().services) {
      totalDuration += Number(item.duration) // Convert item.duration to a number
      totalPrice += item.price
    }

    set({ totalDuration, totalPrice })
  },
}))
