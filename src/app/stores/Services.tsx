import { create } from "zustand"
import { parseCookies, setCookie, destroyCookie } from "nookies"
import { persist, createJSONStorage } from "zustand/middleware"

interface Service {
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
}

export type ServiceActions = {
  addToCart: (service: Service) => void
  removeFromCart: (serviceId: string) => void
  clearCart: () => void
  updateAllServices: (services: Service[]) => void
}

export type ServiceStore = ServiceState & ServiceActions

// Função auxiliar para atualizar os cookies
const updateCookies = (cartItems: Service[]) => {
  setCookie(null, "cartItems", JSON.stringify(cartItems), {
    maxAge: 30 * 24 * 60 * 60, // Define a expiração do cookie (30 dias)
    path: "/", // Define o caminho do cookie (raiz do site)
  })
}

// Função auxiliar para obter itens do carrinho dos cookies
const getCartItemsFromCookies = (): Service[] => {
  const cookies = parseCookies()
  return cookies.cartItems ? JSON.parse(cookies.cartItems) : []
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: getCartItemsFromCookies(), // Inicialize os serviços com os itens do carrinho dos cookies
  allServices: [],
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
    destroyCookie(null, "cartItems", {
      path: "/", // Define o caminho do cookie (raiz do site)
    })
    set({ services: [] })
  },
  updateAllServices: (services) =>
    set((state) => ({
      allServices: services, // Atualize allServices com os serviços recebidos
    })),
}))

export const useBearStore = create(
  persist<ServiceStore>(
    (set, get) => ({
      services: getCartItemsFromCookies(), // Inicialize os serviços com os itens do carrinho dos cookies
      allServices: [],
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
        destroyCookie(null, "cartItems", {
          path: "/", // Define o caminho do cookie (raiz do site)
        })
        set({ services: [] })
      },
      updateAllServices: (services) =>
        set((state) => ({
          allServices: services, // Atualize allServices com os serviços recebidos
        })),
    }),
    {
      name: "cartItems", // name of the item in the storage (must be unique)
    },
  ),
)
