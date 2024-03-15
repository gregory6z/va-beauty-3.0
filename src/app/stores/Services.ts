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
const updateCookies = (cartItems: Service[]) => {
  setCookie(null, "@VaBeauty:cartItems", JSON.stringify(cartItems), {
    maxAge: 30 * 24 * 60 * 7, // Define a expiração do cookie (30 dias)
    path: "/", // Define o caminho do cookie (raiz do site)
  })
}

// Função auxiliar para obter itens do carrinho dos cookies
const getCartItemsFromCookies = (): Service[] => {
  const cookies = parseCookies()
  return cookies["@VaBeauty:cartItems"]
    ? JSON.parse(cookies["@VaBeauty:cartItems"])
    : []
}

export const useServiceStore = create<ServiceStore>((set, get) => ({
  services: getCartItemsFromCookies(), // Inicialize os serviços com os itens do carrinho dos cookies
  allServices: [],
  totalDuration: 0,
  totalPrice: 0,
  addToCart: (service) =>
    set((state) => {
      const isServiceInCart = state.services.some(
        (item) => item.id === service.id,
      )
      if (!isServiceInCart) {
        const newServices = [...state.services, service]
        updateCookies(newServices) // Atualize os cookies
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
      updateCookies(newServices) // Atualize os cookies
      return { ...state, services: newServices }
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
