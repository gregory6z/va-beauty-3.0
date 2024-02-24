import { create } from "zustand"

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

interface ServiceStore {
  services: Service[]
  allServices: Service[]
  addToCart: (service: Service) => void
  removeFromCart: (serviceId: string) => void
  clearCart: () => void
  // getTotal: () => number
}

export const useCartServiceStore = create<ServiceStore>((set) => ({
  services: [],
  allServices: [],
  addToCart: (service) => {
    set((state) => ({
      services: [...state.services, service],
    }))
  },
  removeFromCart: (serviceId) => {
    set((state) => ({
      services: state.services.filter((service) => service.id !== serviceId),
    }))
  },
  clearCart: () => {
    set({ services: [] })
  },
}))
